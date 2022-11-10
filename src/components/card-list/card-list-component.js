import React, { Component } from 'react';
import Card from '../card/card';
import './card-list-style.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
