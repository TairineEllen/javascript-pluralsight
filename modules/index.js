const { default: axios } = require('axios');
const { realpath } = require('fs');

/* we're taking input from the terminal and printing any output back to the terminal */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter command: ' /* when we call prompt, the enter command string will print in the terminal */
});

readline.prompt();
readline.on('line', line => {
  switch (line.trim()) { /* will control the funcionality based on the user's command */
    case 'list vegan foods':
      {
        axios.get('http://localhost:3001/food').then(({ data }) => {
          let i = 0;
          const veganFoods = data.filter(food => {
            return food.dietary_preferences.includes('vegan');
          });
          const veganIt = {
            [Symbol.iterator]() {
              return {
                [Symbol.iterator]() { return this; },
                next() {
                  const current = veganFoods[i];
                  i++;
                  if (current) {
                    return { value: current, done: false };
                  } else {
                    return { value: current, done: true };
                  }
                }
              }
            }
          }
          for (let val of veganIt) {
            console.log(val.name);
          }
          readline.prompt();
        });
      };
      break;
    case 'log':
      {
        readline.question('What would you like to log today? ', async item => {
          const { data } = await axios.get('http://localhost:3001/food');
          const it = data[Symbol.iterator]();
          let position = it.next();
          while (!position.done) {
            const food = position.value.name;
            if (food === item) {
              console.log(`${item} has ${position.value.calories} calories`);
            }
            position = it.next();
          }
          readline.prompt();
        });
      };
  };
});

