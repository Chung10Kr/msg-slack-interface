
let SlackService = require("./slack/slackService");
let Api = require("./slack/lib/api");
let WebHook = require("./slack/lib/webHook");
const config = require("./config");

class App{
    constructor(){

      this.slack =  SlackService.getInstance();
    }
    async start(){
      let online = await this.slack.userStatus( config.userId );
      console.log( online ) 
      

      this.slack.sendMsg({
          'channel' : 'fastbox',
          'username' : '이무배',
          'text' : '창식아 안녕???'
        });
 
    }
}
let app = new App();
app.start()