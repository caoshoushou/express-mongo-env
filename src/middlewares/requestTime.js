// src/middlewares/requestTime.js
const addRequestTimeHeader = (req, res, next) => {
  // 记录请求到达时间（ISO格式）
  const requestArrivalTime = new Date().toISOString();
  // 添加自定义响应头
  res.setHeader('X-Request-Arrival-Time', requestArrivalTime);
  // 执行下一个中间件
  next();
};

module.exports = addRequestTimeHeader;