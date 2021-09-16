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
  const wait = new Promise((resolve) => { 
    interval = setInterval(() => {
      console.log('INTERVAL');
      resolve(`Timeout! ${++counter}`); 
    }, 1500);
  }); 
  wait.then(text => setText(text))
  .finally(() => clearInterval(interval));
}

export function xhr(){
}

export function allPromises(){
}

export function allSettled(){
}

export function race(){
}