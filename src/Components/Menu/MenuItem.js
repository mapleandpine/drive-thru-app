import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newMenuOrder:{}
    }
  }

  addToOrder(e) {
    this.setState({newOrder:{
      id: this.props.menuitem.id,
      title: this.props.menuitem.title,
      price: this.props.menuitem.price
    }}, function() {
      console.log(this.state.newMenuOrder);
      this.props.onAdd(this.state.newMenuOrder);
    })
    e.preventDefault();
  }

  render() {
    return (
      <figure id={this.props.menuitem.id} className="MenuItem" onClick={this.addToOrder.bind(this)}>
        <strong>{this.props.menuitem.title}:</strong> {this.props.menuitem.price}
      </figure>
    );
  }
}

MenuItem.propTypes = {
  menuitem: PropTypes.object,
  addToOrder: PropTypes.func
}

export default MenuItem;
