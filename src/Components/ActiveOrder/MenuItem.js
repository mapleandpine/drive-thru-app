import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details:{
        id: this.props.menuitem.id,
        title: this.props.menuitem.title,
        price: this.props.menuitem.price
      }
    }
  }

  addItem(e) {
    this.props.onAddItem(this.state.details);
    e.preventDefault();
  }

  render() {
    return (
      <figure id={this.props.menuitem.id} className="MenuItem" onClick={this.addItem.bind(this)}>
        <strong>{this.props.menuitem.title}:</strong> {this.props.menuitem.price}
      </figure>
    );
  }
}

MenuItem.propTypes = {
  menuitem: PropTypes.object,
  addItem: PropTypes.func
}

export default MenuItem;
