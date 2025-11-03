const express = require('express');
const db = require('../db/connection');

const users = db.get('users');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await users.find({});
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});
const userController = require('../controllers/userController');

// 确保POST路由正确定义
router.post('/', userController.createUser);
module.exports = router;
