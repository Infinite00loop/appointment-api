const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/get-user', adminController.getUser);
router.post('/insert-user', adminController.insertUser);
router.delete('/delete-user/:email', adminController.deleteUser);

module.exports = router;