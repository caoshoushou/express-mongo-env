const monk = require('monk');
const db = monk('mongodb://localhost:27017/my-employees');

// 插入测试数据
db.get('users').insertMany([
  { username: "testuser1", job: "developer", age: 25 },
  { username: "testuser2", job: "designer", age: 28 }
])
.then(() => {
  console.log('✅ 本地测试数据插入成功');
  process.exit();
})
.catch(err => {
  console.error('❌ 插入数据失败：', err);
  process.exit(1);
});
