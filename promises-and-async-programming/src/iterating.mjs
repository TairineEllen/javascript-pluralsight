import setText , {appendText} from './results.mjs';

export async function get() {
  /*this is making the promise a synchronous call*/
  const { data } = await axios.get('http://localhost:3000/orders/1');
  setText(JSON.stringify(data));
}

export async function getCatch() {
  try {
    const { data } = await axios.get('http://localhost:3000/orders/123');
    setText(JSON.stringify(data));
  } catch(error) {
    setText(error);
  }  
}

export async function chain() {
  const { data } = await axios.get('http://localhost:3000/orders/1');
  const { data: address } = await axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);

  setText(`City: ${JSON.stringify(address.city)}`);
}

export async function concurrent() {
  /*both API calls kick off at one time*/
  const orderStatus = axios.get('http://localhost:3000/orderStatuses');
  const orders = axios.get('http://localhost:3000/orders');

  setText('');
  /*awaiting the orderStatus first*/
  const { data: statuses } = await orderStatus;
  const { data: order } = await orders;
  
  appendText(JSON.stringify(statuses));
  appendText(JSON.stringify(order[0]));

}

export function parallel(){
}