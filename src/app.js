// src/app.js 关键代码片段
const express = require('express');
const userRoutes = require('./routes/users'); // 先引入
const app = express();

// 其他中间件配置（如express.json()等）
app.use(express.json());

// 后使用路由，避免变量未定义
app.use('/api/users', userRoutes);


require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { notFound, errorHandler, timeSign } = require('./middlewares');



console.log(`${__dirname}/ui-routes/views`);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/ui-routes/views`);
app.use(express.static(`${__dirname}/ui-routes/views`));

app.use(express.static(`${__dirname}/ui-routes/public`));

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(timeSign);

// app.set('views', `${__dirname}/ui-routes/views`);
// app.use(express.static(`${__dirname}/ui-routes/public`));

// app.set('view engine', 'ejs');

const employees = require('./routes/employees');
const ui = require('./ui-routes/index');

const users = require('./routes/users');
app.use('/api/users', userRoutes);
app.use('/api/employees', employees);
app.use('/api/users', users);

app.use('/ui/employees', ui);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
