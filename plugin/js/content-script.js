sessionStorage.setItem("enableShuYunTranslateExtend", 'yes');

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function () {
  injectCustomJs();
});

window.onbeforeunload = function () {
  sessionStorage.removeItem("enableShuYunTranslateExtend")
}

// 向页面注入JS
function injectCustomJs(jsPath) {
  jsPath = jsPath || 'js/inject.js';
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  temp.src = chrome.extension.getURL(jsPath);
  temp.onload = function () {
    this.parentNode.removeChild(this);
  };
  document.body.appendChild(temp);
}
// 主动发送消息给后台
function sendMessageToBackground(message) {
  chrome.runtime.sendMessage({ greeting: message || '你好，我是content-script呀，我主动发消息给后台！' }, function (response) {
    // console.log('数云麒麟crm翻译插件: 收到来自后台的回复：' + response)
  });
}

// 用于和inject通讯
window.addEventListener("message", function (e) {
  // console.log('数云麒麟crm翻译插件: 收到消息：', e.data);
  if (e.data && e.data.cmd == 'invoke') {

  } else if (e.data && e.data.cmd == 'message') {

  }
}, false);
