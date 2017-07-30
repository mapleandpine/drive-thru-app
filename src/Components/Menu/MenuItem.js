import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Menu from "./Menu.png";

class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details:{
        id: uuid.v4(),
        class: this.props.menuitem.class,
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
    var figureStyle = {
      backgroundImage: 'url(' + Menu + ')'
    };
    return (
      <div className="MenuItem" onClick={this.addItem.bind(this)}>
        <figure className={this.props.menuitem.class} style={figureStyle}>
          <strong>{this.props.menuitem.title}</strong> {this.props.menuitem.price}
        </figure>
      </div>
    );
  }
}

MenuItem.propTypes = {
  menuitem: PropTypes.object,
  onAddItem: PropTypes.func
}

export default MenuItem;
