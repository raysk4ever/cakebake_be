const router = require('express').Router();
const CakeController = require('../controllers/cake');

router.get('/all', CakeController.getAllCakes);

module.exports = router;
