import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import "./Menu.css";

class Menu extends Component {

  addItem(id) {
    this.props.onAddItem(id);
  }

  render() {
    let menuItems;
    if(this.props.menu) {
      menuItems = this.props.menu.map(menuitem => {
        return (
          <MenuItem onAddItem={this.addItem.bind(this)} key={menuitem.class} menuitem={menuitem}/>
        )
      });
    }

    return (
      <div className="Menu">
        <div className="MenuList">
          {menuItems}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  onAddItem: PropTypes.func,
  menu: PropTypes.object
}

export default Menu;

