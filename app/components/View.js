var React = require('react');

var View = React.createClass({
  _add: function() {
    items = this.props.items.fields.map(function(item, index){
      return this.refs[item.name].getDOMNode().value;
    }.bind(this));
    this.props.add(items);
  },
  _edit: function() {
    items = this.props.items.fields.map(function(item, index){
      return this.refs[item.name].getDOMNode().value;
    }.bind(this));
    this.props.edit(items);
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
    var listItems = this.props.items.fields.map(function(item, index){

      var label = <label className="control-label">{item.title}</label>;
      if (item.type == 'hidden') {
        label = <div />;
      }

      return (
        <div className="form-group has-success">
          {label}
          <input className="form-control" key={index} type={item.type} ref={item.name} id={item.name} defaultValue={item.value}  />
        </div>
      )
    }.bind(this));

    var actBtn;
    if (this.props.items.act == "add") {
      actBtn = <div><input className="btn btn-info" type="button" value="新增" onClick={this._add} /></div>;
    } else {
      actBtn = <div><input className="btn btn-info" type="button" value="修改" onClick={this._edit} /></div>;
    }

    return (
      <div>
        {listItems}
        {actBtn}
      </div>
    );
  }
});

module.exports = View;
