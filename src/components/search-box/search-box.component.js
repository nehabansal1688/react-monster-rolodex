import React, { Component } from 'react';
import './search-box.style.css';

class SearchBox extends Component {
  handleSearch = () => {};

  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="search"
          placeHolder={this.props.placeHolder}
          onChange={this.props.handleSearch}
        />
      </div>
    );
  }
}

export default SearchBox;
