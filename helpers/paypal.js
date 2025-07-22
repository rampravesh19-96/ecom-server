const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfkJUhy9s9FGDNKGV9SVH0MXsn_vEp1tjwR1ej0AmT7RojV4MloRhgNt3Gkt3j0gy-0XVV0vPo5eZgWD",
  client_secret: "EJlzRm2R3OCFu7HLhlxWuWP-C2SJG2JUtpNHSWd3xNcOCaFsFwOL8yiIMCAaz3VotmxOaLfUh34oaGtD",
});

module.exports = paypal;
