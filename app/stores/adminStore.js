var AdminDispatcher = require('../dispatcher/AdminDispatcher');
var AdminConstants = require('../constants/AdminConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var React = require('react/addons');

var CHANGE_EVENT = 'change';
var CHANGE_SEARCH_ITEMS = 'change_search_items';
var CHANGE_VIEW_ITEMS = 'change_view_items';

var _store = {
  search: [
    {
      title: "姓名",
      name: "name",
      type: "text",
      value: ""
    }
  ],
  list:
    {
      cloumn : ["Id", "姓名", "密碼", "Action"],
      lists : [
        ["1", "jasonwang", "1234"],
        ["2", "zoey", "45678"]
      ]
    },
  resultList:
    {
      rescloumn : ["Id", "姓名", "密碼", "Action"],
      reslists : [
        ["1", "jasonwang", "1234"],
        ["2", "zoey", "45678"]
      ]
    },
  view:{
    fields : [
      {
        title: "Id",
        name: "Id",
        type: "hidden",
        value: ""
      },
      {
        title: "姓名",
        name: "name",
        type: "text",
        value: ""
      },
      {
        title: "帳號",
        name: "id",
        type: "password",
        value: ""
      }
    ],
    act: "add"
  },
  status: {ListView : true, View: false}
};

var addItem = function(items){
  console.log(items);
  _store.list.lists = React.addons.update(_store.list.lists, {$push: [items]});
  _store.resultList.rescloumn = _store.list.cloumn;
  _store.resultList.reslists = _store.list.lists;
};

var editItem = function(eidtItems) {
  console.log('editItem');
  _store.list.lists.map(function (item, index){

    if (eidtItems[0] == item[0]) {
      console.log(eidtItems[0] + " = " + item[0]);
      var name = eidtItems[1];
      var password = eidtItems[2];
      item[1] = name;
      item[2] = password;
    }
  });
  _store.resultList.rescloumn = _store.list.cloumn;
  _store.resultList.reslists = _store.list.lists;
}

var setSearchItems = function(items) {
   _store.search = items;
};

var setViewItems = function(id) {
  if (id != -1) {
    _store.list.lists.map(function (item, index){
      if (item[0] == id) {
        var name = item[1];
        var password = item[2];
        _store.view.fields[0].value = id;
        _store.view.fields[1].value = name;
        _store.view.fields[2].value = password;
        _store.view.act = "edit";
      }
    });
  } else {
    _store.view.fields[0].value = _store.list.lists.length + 1;
    _store.view.fields[1].value = "";
    _store.view.fields[2].value = "";
    _store.view.act = "add";
  }
}

var searchList = function(items) {
   var name = items[0].value;
   var resultLists = [];
   _store.list.lists.map(function (item, index){
      if (name == "") {
        resultLists.push(item);
      }
      if (name == item[1]) {
        resultLists.push(item);
      }
    });
   _store.resultList.rescloumn = _store.list.cloumn;
   _store.resultList.reslists = resultLists;
};

var deleteListItem = function(id) {
  var deIndex = -1;
  _store.list.lists.map(function (item, index){
    if (item[0] == id) {
      deIndex = index;
    }
  });
  if (deIndex != -1) {
     _store.list.lists = React.addons.update(_store.list.lists, {$splice: [[deIndex,1]]});
     _store.resultList.rescloumn = _store.list.cloumn;
     _store.resultList.reslists = _store.list.lists;
  }
};

var adminStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getSearchItems: function() {
    return _store.search;
  },
  getViewItems: function() {
    return _store.view;
  },
  getListItems: function() {
    return _store.resultList;
  },
  getViewItems: function() {
    return _store.view;
  },
  getStore: function() {
    return _store;
  },
});

AdminDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType) {
    case AdminConstants.ADD:
      addItem(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    case AdminConstants.EDIT:
      editItem(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    case AdminConstants.SEARCH:
      searchList(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    case AdminConstants.DELETE:
      deleteListItem(action.data);
      adminStore.emit(CHANGE_EVENT);
    break;
    case AdminConstants.SET_VIEW_ITEMS:
      setViewItems(action.data);
    break;
    default:
      return true;
  }
});

module.exports = adminStore;
