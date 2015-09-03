var Dispatcher = require('flux').Dispatcher;
var AdminDispatcher = new Dispatcher();

AdminDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AdminDispatcher;
