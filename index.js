const app = require('./backend/app');
const http = require('http');
const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
