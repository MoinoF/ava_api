const express = require('express')
const HomeController = require('../controllers/HomeController')
const PlanCreateController = require('../controllers/plans/PlanCreateController')
const router = express.Router()

/**
 * Home
 */
router.get('/', HomeController.execute)

/**
 * Plans
 */
router.post('/api/plans/create', PlanCreateController.create )



module.exports = router