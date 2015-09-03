建置順序
```markdown
npm install
npm start
```
安裝 Webpack
```markdown
npm install -g webpack
```
監聽 js 更新
```markdown
webpack -d --watch
```
將 ajax 寫在 Dispatcher 的事件內 
```markdown
Actions = {
  updateData: function(data) {
    dispatch('UPDATE_DATA');
    $.ajax({
      url: '...',
      data: data,
      success: function(response) {
        dispatch('UPDATE_DATA_SUCCESS', response);
      },
      error: function(response) {
        dispatch('UPDATE_DATA_ERROR', response);
      }
    })
  }
}
```
