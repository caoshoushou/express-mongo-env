const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 替换为你的MongoDB连接地址（本地或云实例均可）
    const conn = await mongoose.connect('mongodb://localhost:27017/express_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1); // 连接失败时退出进程
  }
};

module.exports = connectDB;