const { Component } = require("react");

class SearchBox extends Component {
  render() {
    const { className, placeholder, onChangeHanler } = this.props;
    return (
      <div>
        <input
          className={className}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHanler}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
