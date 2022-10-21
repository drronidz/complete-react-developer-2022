import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
        searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState(() => {
          return {
            monsters : users
          }
        }))
  }

  onSearchChange =  event => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => { return { searchField } })
  }

  render() {
      const { monsters, searchField } = this.state
      const { onSearchChange } = this

      const filteredMonsters = monsters.filter((monster) => {
          return monster.name.toLowerCase().includes(searchField)
      })

      return (
        <div className="App">
            <SearchBox
                className="search-box"
                onChangeHandler={onSearchChange}
                placeholder="search monsters"
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    );
  }


}

export default App;
