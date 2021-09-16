import setText, { appendText } from "./results.mjs";

export function timeout() {
  /*promise that will call resolve, which will set the state to fulfilled,
  and then call our then function*/
  const wait = new Promise((resolve) => { /*this parameter is the function executor*/
    setTimeout(() => {
      resolve('TimeOut!'); /*return value*/
    }, 1500);
  }); 
  wait.then(text => setText(text))
}

export function interval(){
}

export function clearIntervalChain(){
}

export function xhr(){
}

export function allPromises(){
}

export function allSettled(){
}

export function race(){
}