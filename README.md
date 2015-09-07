此項目主要是學習用 ReactJs 跟 Flux 架構
模擬後台新增修改刪除的操作流程

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
Flux 建立順序
```markdown
Dispatcher -> Action -> Store -> ReactComponent
介由 ReactComponent 執行 Action 跟 監聽 Store 內的事件
而 Dispatcher 在 Stroe 中 register Action執行後的結果, 並觸發 Stroe 所設定的 EventEmitter 
```
Flux 執行關聯圖
```markdown
ReactComponent -> Action -> Dispatcher
      |                          |
      |<----------Stroe <--------|
```
可將 ajax 寫在 Dispatcher 或 Actions 的事件內 
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
Flux 的架構主要是用主 root Component 的 state 去控制 子 Component 的項目刷新
這種設計有助於 Component 在 Model 中的流動,
當然 Component 的無state 設計也只是個建議參考
