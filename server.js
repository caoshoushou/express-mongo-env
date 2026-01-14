const app = require('./app');
// 适配prod是文件的情况，直接加载prod文件（而非prod/.env）
require('dotenv').config({ path: './prod' });
const PORT = process.env.PORT || 3065;

app.listen(PORT, () => {
  console.log('REST服务已启动：http://localhost:' + PORT);
  console.log('接口前缀：http://localhost:' + PORT + '/api/users');
});
