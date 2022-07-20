const Router = require('express')
const router = new Router
const infoController = require('../controllers/infoController')


router.get('/all', infoController.getInfo)
router.post('/query', infoController.getQueryInfo)

module.exports = router
