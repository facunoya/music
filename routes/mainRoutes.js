const express = require('express');
const router = express.Router();
const mainControllers =  require('../controllers/mainControllers')
const methodOverride = require('method-override')

router.use(express.urlencoded({extended: true}))
router.use(express.json())
router.use(methodOverride('_method'))


router.get('/search', mainControllers.getSearch )
router.post('/search', mainControllers.search)


module.exports = router;
