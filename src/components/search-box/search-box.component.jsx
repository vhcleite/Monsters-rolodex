import './search-box.styles.css'

const { Component } = require("react");

class SearchBox extends Component {
  render() {
    const { placeholder, onChangeHanler } = this.props;
    return (
      <div>
        <input
          className='search-box'
          type="search"
          placeholder={placeholder}
          onChange={onChangeHanler}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
