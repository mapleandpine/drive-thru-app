import { Component } from 'react';
import uuid from 'uuid';

class OrderClass extends Component {

  // use this Order definition via `let myOrder = new Order()`
  // data definition and state should live top-level
  constructor() {
    super();
    this.closed = false;
    this.date = new Date();
    this.id = uuid.v4();
    this.items = [];
  }
}

export default OrderClass;
