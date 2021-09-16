import setText, { appendText } from "./results.mjs";

export function timeout() {
  /*promise that will call resolve, which will set the state to fulfilled,
  and then call our then function*/
  const wait = new Promise((resolve) => { /*this parameter is the function executor*/
    setTimeout(() => {
      resolve('TimeOut!'); /*return value*/
    }, 1500);
  }); 
  wait.then(text => setText(text));
}

export function interval() {
  let counter = 0;
  const wait = new Promise((resolve) => { 
    setInterval(() => {
      console.log('INTERVAL');
      resolve(`Timeout! ${++counter}`); 
    }, 1500);
  }); 
  wait.then(text => setText(text))
  .finally(() => appendText(`--Done ${counter}`));
}

export function clearIntervalChain() {
  let counter = 0;
  let interval;
  const wait = new Promise(resolve => { 
    interval = setInterval(() => {
      console.log('INTERVAL');
      resolve(`Timeout! ${++counter}`); 
    }, 1500);
  }); 
  wait.then(text => setText(text))
  .finally(() => clearInterval(interval));
}

export function xhr() {
  let request = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/users/7');
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject('Request Failed');
    xhr.send();
  });
  request
    .then(result => setText(result))
    .catch(reason => setText(reason));
}

export function allPromises() {
  /*all three are promises*/
  let categories = axios.get('http://localhost:3000/itemCategories');
  let statuses = axios.get('http://localhost:3000/orderStatuses');
  let userTypes = axios.get('http://localhost:3000/userTypes');
  let addressTypes = axios.get('http://localhost:3000/addressTypes');

  /*will queue up all the promises, and wait until all return*/
  Promise.all([categories, statuses, userTypes, addressTypes])
  .then(([cat, sta, type, adr]) => {
    setText('');
    appendText(JSON.stringify(cat.data));
    appendText(JSON.stringify(sta.data));
    appendText(JSON.stringify(type.data));
    appendText(JSON.stringify(adr.data));
  })
  .catch(reason => setText(reason)); 
}

export function allSettled() {
   let categories = axios.get('http://localhost:3000/itemCategories');
   let statuses = axios.get('http://localhost:3000/orderStatuses');
   let userTypes = axios.get('http://localhost:3000/userTypes');
   let addressTypes = axios.get('http://localhost:3000/addressTypes'); 
  
   Promise.allSettled([categories, statuses, userTypes, addressTypes])
   .then(values => {
     let results = values.map(value => {
       if (value.status === 'fulfilled') {
         return `FULFILLED: ${JSON.stringify(value.value.data[0])} `;
       }
       return `REJECTED: ${value.reason.message} `;
     });
     setText(results);     
   })
   .catch(reason => setText(reason)); 
}

export function race() {
  let users = axios.get('http://localhost:3000/users');
  let backup = axios.get('http://localhost:3001/users');

  Promise.race([users, backup])
  .then(users => setText(JSON.stringify(users.data)))
  .catch(reason => setText(reason));
}