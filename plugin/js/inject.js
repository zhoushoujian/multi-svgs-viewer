// 通过postMessage调用content-script
function invokeContentScript(code) {
  window.postMessage({ cmd: 'invoke', data: code }, '*');
}

// 发送普通消息到content-script
function sendMessageToContentScriptByPostMessage(data) {
  // 收到来自切换语言的消息, 发到main.tsx
  window.postMessage({ cmd: 'shuyun-translate', data: data }, '*');
}

// 通过DOM事件发送消息给content-script
(function () {
  var customEvent = document.createEvent('Event');
  customEvent.initEvent('myCustomEvent', true, true);
  // 通过事件发送消息给content-script
  function sendMessageToContentScriptByEvent(data) {
    data = data || '你好，我是injected-script!';
    var hiddenDiv = document.getElementById('myCustomEventDiv');
    hiddenDiv.innerText = data
    hiddenDiv.dispatchEvent(customEvent);
  }
  window.sendMessageToContentScriptByEvent = sendMessageToContentScriptByEvent;
})();
