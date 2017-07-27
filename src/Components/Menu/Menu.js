import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from "./MenuItem";
import './Menu.css';

class Menu extends Component {

  addToOrder(id) {
    this.props.onAdd(id);
  }

  render() {
    let menuItems;
    if(this.props.menu) {
      menuItems = this.props.menu.map(menuitem => {
        return (
          <MenuItem onAdd={this.addToOrder.bind(this)} key={menuitem.title} menuitem={menuitem}/>
        )
      });
    }
    return (
      <div className="Menu">
        {menuItems}
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.array,
  addToOrder: PropTypes.func
}

export default Menu;
