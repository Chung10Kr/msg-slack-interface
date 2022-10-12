
const config = require("./config");

const { App } = require('@slack/bolt');

const app = new App({
  token: config.botToken,
  signingSecret: config.signingSecret,
  socketMode: true,
  appToken: config.appToken,
  port:3000
});

app.message(':wave:', async ({ message, say }) => {
  await say(`Hello, <@${message.user}>`);
});


(async () => {
  // Start your app
  let result = await app.start();
  console.log( result );
  console.log('⚡️ Bolt app is running!');
})();
