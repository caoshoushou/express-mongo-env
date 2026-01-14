// 必须先导入monk模块，否则会报未定义错误
const monk = require('monk');
// 加载prod配置文件（适配Mac的路径）
require('dotenv').config({ path: '../../prod' });

// 从环境变量获取MongoDB链接
const DB_URL = process.env.DB_URL;
if (!DB_URL) {
  throw new Error('❌ 请在prod文件中配置DB_URL');
}

// 连接MongoDB（增加超时配置，避免连接失败）
const db = monk(DB_URL, {
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000
});

// 验证连接状态
db.then(() => {
  console.log('✅ 成功连接到远程MongoDB数据库');
}).catch((err) => {
  console.error('❌ MongoDB连接失败：', err.message);
});

// 导出数据库实例和集合
module.exports = {
  db,
  usersCollection: db.get('users'),
  employeesCollection: db.get('employees')
};
