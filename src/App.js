import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();

    this.state = {
      monsters: [],
      filterString: '',
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return {
              monsters: users,
              filteredMonsters: users,
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    console.log("render");

    const filteredMonsters = this.state.monsters.filter((monster) =>
    monster.name.toLowerCase().includes(this.state.filterString)
  );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const filterValue = event.target.value.toLowerCase();
            this.setState(() => {
              return { filterString: filterValue };
            });
          }}
        ></input>
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
