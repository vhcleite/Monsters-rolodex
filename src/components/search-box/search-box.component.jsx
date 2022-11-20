import "./search-box.styles.css";

const SearchBox = (props) => {
  const { placeholder, onChangeHanler: onChangeHandler } = props;
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

// class SearchBox extends Component {
//   render() {
//     const { placeholder, onChangeHanler } = this.props;
//     return (
//       <div>
//         <input
//           className='search-box'
//           type="search"
//           placeholder={placeholder}
//           onChange={onChangeHanler}
//         ></input>
//       </div>
//     );
//   }
// }

export default SearchBox;
