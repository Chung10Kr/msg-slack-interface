const { App } = require('@slack/bolt');

const config = require("../../config");

class Socket{

    constructor()
    {
      this._setToken();
    }
    _setToken()
    {

      this.app = new App({
        token: config.botToken,
        signingSecret: config.signingSecret,
        socketMode : true,
        appToken : config.appToken,
        port : 3000
      });

    }

    async connect()
    {
      let self = this;
      // Listens to incoming messages that contain "hello"
      this.app.message('123', async ({ message, say }) => {
        console.log("!!!!!!!!!!!")
        // say() sends a message to the channel where the event was triggered
        await say(`Hey there <@${message.user}>!`);
      });

      
      (async () => {
        // Start your app
        let oResult = await self.app.start();
        console.log( oResult )
        console.log('⚡️ Bolt app is running!');
      })();
    }
    
}

module.exports = Socket