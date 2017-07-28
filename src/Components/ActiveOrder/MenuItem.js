import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from "./Menu.png";

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
    var figureStyle = {
      backgroundImage: 'url(' + Menu + ')'
    };
    return (
      <div id={this.props.menuitem.id} className="MenuItem" onClick={this.addItem.bind(this)}>
        <figure className={this.props.menuitem.class} style={figureStyle}>
          <strong>{this.props.menuitem.title}</strong> {this.props.menuitem.price}
        </figure>
      </div>
    );
  }
}

MenuItem.propTypes = {
  menuitem: PropTypes.object,
  addItem: PropTypes.func
}

export default MenuItem;
