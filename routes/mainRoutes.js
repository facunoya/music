const express = require('express');
const router = express.Router();
const mainControllers =  require('../controllers/mainControllers')
const methodOverride = require('method-override')

router.use(express.urlencoded({extended: false}))
router.use(express.json())
router.use(methodOverride('_method'))


router.get('/', mainControllers.getIndex )


module.exports = router;
