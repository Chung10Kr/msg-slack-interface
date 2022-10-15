const config = require("./config");

// npm install slack-node
const Slack = require('slack-node');

let webhookUri = config.webhookUri

let slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: `#hook_test`,
  username: `이무배`,
  icon_emoji: ":kr:",
  text: `창식아 안녕?`
}, function(err, response) {
  if( err ){
    console.log( err )
  }
});
