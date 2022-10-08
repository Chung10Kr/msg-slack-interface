
let WebHook = require("./lib/webHook");
let Api = require("./lib/api");

class SlackService{

  constructor(){
      if( this.instance ) return this.instance;

      this.webHook = new WebHook();
      this.api = new Api();

      this.instance = this;
  }
  static getInstance(){
    if(!this.instance){
      this.instance = new SlackService();
    }
    return this.instance;
  }

  //메세지 보내기
  sendMsg(opt)
  {
    this.webHook.sendMsg(opt);
  }

  //로그인 상태 확인
  async userStatus(userId)
  {
    return await this.api.userStatus(userId);
  }
}
module.exports = SlackService;