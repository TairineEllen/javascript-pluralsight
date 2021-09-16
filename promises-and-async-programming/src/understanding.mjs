import setText from "./results.mjs";

export function raceCondition() {
  /*request to the order statuses endpoint*/
  let xhr = new XMLHttpRequest(); /*allows us to make requests against an API*/
  let statuses = [];
  xhr.open("GET", "http://localhost:3000/orderStatuses"); /*specifies the path of the request in the open function*/
  xhr.onload = () => { /*success*/
    statuses = JSON.parse(xhr.responseText);
  };

  xhr.send(); /*the request is sent*/

  /*request to the orders endpoints*/
  let xhr2 = new XMLHttpRequest();
  xhr2.open("GET", "http://localhost:3000/orders/1");
  xhr2.onload = () => {
    /*looks up the order status for that particular order in the list
    of order statuses that was returned above*/
    const order = JSON.parse(xhr2.responseText); 
    const description = statuses.map(t => {
      if (t.id === order.orderStatusId) {
        return t.description;
      }
    })[0];

    setText(`Order Status: ${description}`);
  };

  xhr2.send();
}

export function callbacks() {
  let xhr = new XMLHttpRequest();
  let statuses = [];
  xhr.open("GET", "http://localhost:3000/orderStatuses");

  xhr.onload = () => {
    statuses = JSON.parse(xhr.responseText);

    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://localhost:3000/orders/1");

    xhr2.onload = () => {
      const order = JSON.parse(xhr2.responseText);

      const description = statuses.map(t => {
        if (t.id === order.orderStatusId) {
          return t.description;
        }
      })[0];

      setText(`Order Status: ${description}`);
    };

    xhr2.send();
  };

  xhr.send();
}
