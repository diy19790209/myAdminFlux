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
    // 假設已經 callback 回傳結果
    var listItem = {
      cloumn : ["姓名", "密碼", "Action"],
      lists : [
        ["jasonwang", "1234"],
        ["zoey", "45678"]
      ]
    };
    AdminDispatcher.handleAction({
      actionType: AdminConstants.SEARCH,
      data: listItem
    });
  },
  delete: function(index) {
    AdminDispatcher.handleAction({
      actionType: AdminConstants.DELETE,
      data: index
    });
  },
  setSearchItems: function(appNum) {
    // 假設已經 callback 回傳結果
    var items = [
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
        },
    ];
    AdminDispatcher.handleAction({
      actionType: AdminConstants.SET_SEARCH_ITEMS,
      data: items
    });
  },
  setViewItems: function(appNum, index) {
    // 假設已經 callback 回傳結果
    var items = [
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
        },
    ];
    AdminDispatcher.handleAction({
      actionType: AdminConstants.SET_VIEW_ITEMS,
      data: items
    });
  }
}
module.exports = adminAction;
