
let WebHook = require("./lib/webHook");
let Api = require("./lib/api");
let Socket = require("./lib/socket");

const config = require("../config");

class SlackService{

  constructor(){
      if( this.instance ) return this.instance;

      this.webHook = new WebHook();
      this.api = new Api();
      this.socket = new Socket();

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
    this.api.sendMsg({
      'channel' : config.channelId,
      'username' : 'Api',
      'text' : '뜨거운 여름밤은 가고'
    });

    this.webHook.sendMsg({
      'channel' : config.channelNm,
      'username' : 'WebHook',
      'text' : '비가온다..눈이 되지 못한 채 '
    });
  }

  //로그인 상태 확인
  async userStatus(userId)
  {
    return await this.api.userStatus(userId);
  }

  async connect()
  {
    return await this.socket.connect();
  }
}
module.exports = SlackService;