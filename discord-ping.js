const { default: axios } = require("axios");

const webhook =
  process.env.PLUGIN_WEBHOOK_URL ||
  "https://discord.com/api/webhooks/1166978146793426944/UPlu4v1zgGHqA4DAt3YCpLsXzQuQFbImARjhZR48N2FnyERdZn6J5UQmRTIO_mpe6dsn";

axios.post(webhook, {
  content: process.env.PLUGIN_MESSAGE || "Hello, World!",
  username: "Harness CI Bot",
  avatar_url:
    "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/vpfksuwzidzroxuk4llw",
});
