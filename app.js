const express = require('express');
// 加载prod配置文件（适配prod是文件的情况）
require('dotenv').config({ path: './prod' });

// 导入中间件和路由（适配src目录结构）
const addRequestTimeHeader = require('./src/middlewares/requestTime');
const userRoutes = require('./src/routes/users');

// 初始化Express
const app = express();
// 解析JSON请求体
app.use(express.json());

// 挂载请求时间中间件
app.use(addRequestTimeHeader);
// 挂载User路由到/api/users
app.use('/api/users', userRoutes);

// 根路由测试
app.get('/', (req, res) => {
  res.send('✅ REST服务启动成功！访问 http://localhost:3065/api/users 测试接口');
});

// 404处理中间件
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '接口不存在'
  });
});

// 导出app模块
module.exports = app;
