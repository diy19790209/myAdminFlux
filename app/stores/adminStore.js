var AdminDispatcher = require('../dispatcher/AdminDispatcher');
var AdminConstants = require('../constants/AdminConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  search: [
      {
        title: "姓名",
        name: "name",
        type: "text",
        value: "jasonwamg"
      },
      {
        title: "帳號",
        name: "id",
        type: "password",
        value: "123"
      },
  ],
  list:[],
  view:{}
};

var addItem = function(items){
  console.log('addItem');
};

var searchList = function(items) {

}

var adminStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getSearchItems: function() {
    // 撈取搜尋表單
    return _store.search;
  },
  getListItems: function() {
    return _store.list;
  },
  getViewItems: function() {
    return _store.view;
  },
});

AdminDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case AdminConstants.ADD:
      addItem(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    case AdminConstants.SEARCH:
      searchList(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    default:
      return true;
  }
});

module.exports = adminStore;
