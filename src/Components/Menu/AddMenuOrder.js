import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddMenuOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newMenuItem:{}
    }
  }

  handleSubmit(e) {
    if(this.refs.title.value === "") {
      alert('Title is required');
    } else {
      this.setState({newMenuItem:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function() {
        this.props.addMenuItem(this.state.newMenuItem);
      })
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div className="AddMenuItem">
        <h3>Add Order</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <br />
          <div>
            <label>Payment</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit"/>
          <br />
        </form>
      </div>
    );
  }
}

AddMenuOrder.propTypes = {
  categories: PropTypes.array,
  addMenuOrder: PropTypes.func
}

export default AddMenuOrder;
