const express = require('express');
const app = express();
const PORT = 3000;

let requestCount = 0;
let dbReady = false;

setTimeout(() => {
  dbReady = true;
  console.log('Fake DB connected, dbReady = true');
}, 8000);

app.get('/', (req, res) => {
  requestCount++;
  console.log('Request number', requestCount);

  if (requestCount > 20) {
    console.log('Simulating a hang: infinite loop starting now');
    while (true) {}
  }

  res.send('Hello from mini-app. Request count is ' + requestCount);
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
