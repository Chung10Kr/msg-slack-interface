const config = require("./config");

// npm install @slack/web-api
const { WebClient, LogLevel } = require("@slack/web-api");
     
let botToken = config.botToken
let client = new WebClient(botToken, {
  logLevel: LogLevel.ERROR
});
client.chat.postMessage({
  username : '테드창',
  channel : 'C047A2P44L8',
  text : '그럼 피자집에서 피자가 맛있지 냉면이 맛있게?',
  icon_emoji: ":kr:",
});