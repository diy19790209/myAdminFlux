var React = require('react');

var View = React.createClass({
  _add: function() {
    items = this.props.items.map(function(item, index){
      return this.refs[item.name].getDOMNode().value;
    }.bind(this));
    this.props.add(items);
  },
  componentDidMount: function() {
    console.log('View componentDidMount');
  },
  render: function() {
    if (this.props.status == false) {
      return (
        <div />
      );
    }
    var listItems = this.props.items.map(function(item, index){
      return (
        <div>
          <span>{item.title} : </span>
          <input key={index} type={item.type} ref={item.name} id={item.name} defaultValue={item.value}  />
        </div>
      )
    }.bind(this));
    return (
      <div>
        {listItems}
        <input type="button" value="新增" onClick={this._add} />
      </div>
    );
  }
});

module.exports = View;
