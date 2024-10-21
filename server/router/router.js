const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.post('/signup',controller.sigin_code);
router.post('/data',controller.data_form);


router.get('/data',controller.get_data);
router.get('/signup',controller.get_signup);

module.exports=router;