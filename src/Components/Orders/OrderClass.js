import { Component } from 'react';
import uuid from 'uuid';

class OrderClass extends Component {

  // use this Order definition via `let myOrder = new Order()`
  // data definition and state should live top-level
  constructor() {
    super();
    this.items = [];
    this.id = uuid.v4();
    this.date = new Date();
  }
}

export default OrderClass;
