const { ConsoleLogger } = require("@slack/logger");
const { WebClient, LogLevel } = require("@slack/web-api");
const config = require("../../config");

class Api{

    constructor()
    {
      this._setApi();
    }
    _setApi()
    {
      
      let apiToken = config.apiToken;
      this.client = new WebClient(apiToken, {
        logLevel: LogLevel.ERROR
      });
    }

    //로그인 상태 확인
    async userStatus(userId)
    {
      let result = await this.client.users.getPresence({
        user: config.memberId
      });
      if(!result['online']){
        return false;
      }
      return result['online'];
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
      this.client.chat.postMessage({
        username : opt['username'],
        channel:opt['channel'],
        text:opt['text'],
        icon_emoji: ":kr:",
      });
    }
    
}

module.exports = Api