const express = require('express')
const HomeController = require('../controllers/HomeController')
const PlansController = require('../controllers/plans/PlansController')
const router = express.Router()

/**
 * Home
 */
router.get('/api', HomeController.execute)

/**
 * Plans
 */
router.get('/api/plans', PlansController.get_all )
router.get('/api/plans/active', PlansController.get_active )
router.get('/api/plans/:id', PlansController.get_by_id )
router.delete('/api/plans/:id', PlansController.delete )
router.post('/api/plans', PlansController.create )



module.exports = router