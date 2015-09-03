var React = require('react');

var SearchBar = React.createClass({
  _search: function() {
    var items = this.props.items.map(function(item, index){
      return {
        name: item.name,
        value: this.refs[item.name].getDOMNode().value
      }
    }.bind(this));
    this.props.search(items);
  },
  render: function() {
    var listItems = this.props.items.map(function(item, index){
      return (
        <div>
          <span>{item.title} : </span>
          <input type="text" ref={item.name} id={item.name} defaultValue={item.value}  />
        </div>
      )
    }.bind(this));
    return (
      <div>
        {listItems}
        <input type="button" value="搜尋" onClick={this._search} />
      </div>
    )
  }
});

module.exports = SearchBar;
