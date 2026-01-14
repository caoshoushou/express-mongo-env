// src/controllers/userController.js
const { usersCollection } = require('../db/connection');

const userController = {
  // 1. 获取所有用户
  getAllUsers: async (req, res) => {
    try {
      const users = await usersCollection.find();
      res.status(200).json({ success: true, count: users.length, data: users });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // 2. 按用户名查询
  getUserByUsername: async (req, res) => {
    try {
      const { username } = req.params;
      const user = await usersCollection.findOne({ username });
      res.status(user ? 200 : 404).json({ success: true, data: user || '用户不存在' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // 3. 按_id查询
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await usersCollection.findOne({ _id: id });
      res.status(user ? 200 : 404).json({ success: true, data: user || 'ID不存在' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // 4. 获取所有jobs（假设用户表有job字段）
  getAllJobs: async (req, res) => {
    try {
      const jobs = await usersCollection.distinct('job');
      res.status(200).json({ success: true, count: jobs.length, data: jobs });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  // 5. 按ID范围查询
  getUsersByIdRange: async (req, res) => {
    try {
      const { minId, maxId } = req.query;
      const users = await usersCollection.find({
        _id: { $gte: Number(minId), $lte: Number(maxId) }
      });
      res.status(200).json({ success: true, count: users.length, data: users });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
};

module.exports = userController;