
const config = require("./config");

//npm install @slack/bolt
const { App } = require('@slack/bolt');

const app = new App({
  token: config.botToken,
  signingSecret: config.signingSecret,
  socketMode: true,
  appToken: config.appToken,
  port:3000
});

app.message('hello', async ({ message, say }) => {
  await say(`Hellow^^ , <@${message.user}>`);
});

(async () => {
  // Start your app
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();
