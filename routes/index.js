const express = require('express');

const homeController = require('../controllers/home_controller');
const router = express.Router();


router.get('/',homeController.home);
router.post('/create',homeController.create)
router.post('/delete',homeController.delete)

module.exports = router;