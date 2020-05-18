import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    response = await response.json();
    console.log(response);
    this.setState({ monsters: response });
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeholder="search" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
