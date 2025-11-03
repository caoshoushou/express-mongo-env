// src/server.js
// 加载环境配置文件（根据 NODE_ENV 加载 dev 或 prod 文件）
require('dotenv').config({ path: process.env.NODE_ENV });
const app = require('./app');

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}/n ${process.env.DB_URL}`);
});