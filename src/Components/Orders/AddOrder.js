import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newOrder:{}
    }
  }

  static defaultProps = {
    categories: ['Cash', 'Credit', 'Gift Certificate']
  }

  handleSubmit(e) {
    if(this.refs.title.value === "") {
      alert('Title is required');
    } else {
      this.setState({newOrder:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function() {
        this.props.addOrder(this.state.newOrder);
      })
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div className="AddOrder">
        <h3>Add Order</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <br />
          <div>
            <label>Category</label><br />
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

AddOrder.propTypes = {
  categories: PropTypes.array,
  addOrder: PropTypes.func
}

export default AddOrder;
