import {getKeys} from "./store.js";
import {http} from "./api/api.js";
console.log('message-handler.js was run');
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // todo: add user token
  http.post('http://localhost:3000/chatgpt/check', {message})
    .then(res => {
    const result = res.message;
    sendResponse(result);
  });
  return true;
});
