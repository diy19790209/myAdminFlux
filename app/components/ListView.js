var React = require('react');

var ListView = React.createClass({
  _delete: function(index) {
    this.props.delete(index);
  },
  componentDidMount: function() {
    console.log('ListView componentDidMount');
  },
  render : function() {
    if (this.props.status == false) {
      return (
        <div />
      );
    }
    var cloumnItems = this.props.items.cloumn.map(function(item, index) {
      return (
        <td key={index}>{item}</td>
      );
    });
    var rowItems = this.props.items.lists.map(function(rows, rowsindex) {
      var tdItems = rows.map(function(item, itemIndex) {
        return (
          <td key={itemIndex}>
          {item}
          </td>
        );
      });
      return (
        <tr key={rowsindex}>
          {tdItems}
          <td>
            <input type="button" value="刪除" onClick={this._delete.bind(this, rowsindex)} />
          </td>
        </tr>
      );
    }.bind(this));
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {cloumnItems}
          </tr>
        </thead>
        <tbody>
          {rowItems}
        </tbody>
      </table>
    );
  }
});
module.exports = ListView;
