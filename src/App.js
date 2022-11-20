import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { useState, useEffect } from "react";

const App = () => {
  console.log('render')
  const [filterString, setFilterString] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setFilterString(filterValue);
    console.log({ filterString });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
      console.log('setMonsters')
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(filterString)
    );
    setFilteredMonsters(newFilteredMonsters);
    console.log('set filtered monsters')
  }, [monsters, filterString]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        onChangeHanler={onSearchChange}
      ></SearchBox>
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     console.log("constructor");
//     super();

//     this.state = {
//       monsters: [],
//       filterString: "",
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(
//           () => {
//             return {
//               monsters: users,
//             };
//           },
//           () => {
//             console.log(this.state);
//           }
//         );
//       });
//   }

//   onSearchChange = (event) => {
//     const filterValue = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { filterString: filterValue };
//     });
//   };

//   render() {
//     console.log("render");

//     const { monsters, filterString } = this.state;
//     const onSearchChange = this.onSearchChange;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(filterString)
//     );

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           placeholder="search monsters"
//           onChangeHanler={onSearchChange}
//         ></SearchBox>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
