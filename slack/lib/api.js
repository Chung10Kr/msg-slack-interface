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


    async _getUserId(userId)
    {
      let result = await this.client.users.list();
          
      let memberKey;
      for(let i=0; result.members.length; i++){
        if( result.members[i]['name'] == userId ){
          memberKey = result.members[i]['id'];
          break;
        }
      };
      return memberKey;
    }

    //로그인 상태 확인
    async userStatus(userId)
    {
      let memberKey = await this._getUserId(userId);
      if(!memberKey){
        return false;
      }
      let result = await this.client.users.getPresence({
        user:memberKey
      });
      if(!result['online']){
        return false;
      }
      return result['online'];
    }

    checkChannel()
    {

    }

    makeChannel()
    {

    }
    
}

module.exports = Api