const Slack = require('slack-node');
const config = require("../../config");

class WebHook{

  constructor()
  {
    this._setWebhook();
  }

  _setWebhook()
  {
    let webhookUri = config.webHookURL;
    this.slack = new Slack();
    this.slack.setWebhook(webhookUri);
  }

  //메세지전송
  sendMsg(opt)
  {
    let keys = ['channel','username','text'];
    for(let i=0; i<keys.length; i++){
      if(!Object.keys(opt).includes(keys[i])){
        return false;
      }
    }

    this.slack.webhook({
      channel: `#${opt['channel']}`,
      username: `${opt['username']}`,
      icon_emoji: ":kr:",
      text: `${opt['text']}`
    }, function(err, response) {
      if( err ){
        console.log( err )
      }
    });
  }
}

module.exports = WebHook