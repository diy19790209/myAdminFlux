var AdminDispatcher = require('../dispatcher/AdminDispatcher');
var AdminConstants = require('../constants/AdminConstants');

var adminAction = {
  add: function(items) {
    AdminDispatcher.handleAction({
      actionType: AdminConstants.ADD,
      data: items
    });
  },
  edit: function(items) {
    AdminDispatcher.handleAction({
      actionType: AdminConstants.EDIT,
      data: items
    });
  },
  search: function(items) {
    AdminDispatcher.handleAction({
      actionType: AdminConstants.SEARCH,
      data: items
    });
  },
  delete: function(index) {
    AdminDispatcher.handleAction({
      actionType: AdminConstants.DELETE,
      data: index
    });
  }
}
module.exports = adminAction;
