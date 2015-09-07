var React = require('react');

var ListView = React.createClass({
  _delete: function(index) {
    console.log(index);
    this.props.delete(index);
  },
  _edit: function(index) {
    this.props.edit(index);
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
    var cloumnItems = this.props.items.rescloumn.map(function(item, index) {
      return (
        <td key={index}>{item}</td>
      );
    });
    var rowItems = this.props.items.reslists.map(function(rows, rowsindex) {
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
            <input className="btn btn-danger" style={{margin:5}} type="button" value="刪除" onClick={this._delete.bind(this, rows[0])} />
            <input className="btn btn-warning" style={{margin:5}} type="button" value="修改" onClick={this._edit.bind(this, rows[0])} />
          </td>
        </tr>
      );
    }.bind(this));
    return (
      <table className="table table-bordered table-striped" style={{margin: '5px 0px 0px 0px'}}>
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
