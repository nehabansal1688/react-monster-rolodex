import React from 'react';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box.component';
import './style.css';

class App extends React.Component {
  state = {
    btnTxt: 'default value',
    monsters: [],
    searchString: '',
  };
  handleClick = () => {
    this.setState({ btnTxt: 'changed text' });
  };
  handleSearch = (event) => {
    this.setState({
      searchString: event.target.value.toLowerCase(),
    });
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchString } = this.state;
    const filteredValues = monsters.filter((val) =>
      val.name.toLowerCase().includes(searchString)
    );
    return (
      <React.Fragment>
        <h1 className="app-title">Monsters Rolodex </h1>
        <SearchBox
          handleSearch={this.handleSearch}
          placeHolder="search monsters"
          className="search-box"
        />
        <CardList monsters={filteredValues} />
      </React.Fragment>
    );
  }
}

export default App;
