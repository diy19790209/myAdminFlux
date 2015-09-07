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
  _add: function() {
    this.props.add();
  },
  componentDidMount: function() {
    console.log('SearchBar componentDidMount');
  },
  render: function() {
    var listItems = this.props.items.map(function(item, index){
      return (
        <div className="form-group has-success">
          <label className="control-label">{item.title}</label>
          <input className="form-control" key={index} type={item.type} ref={item.name} id={item.name} defaultValue={item.value}  />
        </div>
      )
    }.bind(this));
    return (
      <div>
        {listItems}
        <input type="button" className="btn btn-success" style={{margin:5}} value="搜尋" onClick={this._search} />
        <input type="button" className="btn btn-info" style={{margin:5}} value="新增" onClick={this._add} />
      </div>
    )
  }
});

module.exports = SearchBar;
