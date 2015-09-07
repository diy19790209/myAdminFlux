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
  search: function(searchValues) {
    AdminDispatcher.handleAction({
      actionType: AdminConstants.SEARCH,
      data: searchValues
    });
  },
  delete: function(index) {
    AdminDispatcher.handleAction({
      actionType: AdminConstants.DELETE,
      data: index
    });
  },
  setViewItems: function(index) {
    AdminDispatcher.handleAction({
      actionType: AdminConstants.SET_VIEW_ITEMS,
      data: index
    });
  }
}
module.exports = adminAction;
