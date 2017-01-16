const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
  const language = req.headers['accept-language'].match(/([a-z]{2}-[A-Z]{2})/)[0];
  const ipaddress = req.ip;
  const software = req.headers['user-agent'].match(/\((.*?)\)/)[1];
  res.send(JSON.stringify({
    ipaddress,
    language,
    software
  }));
  res.end();
});

app.listen(process.env.PORT || 8080);
