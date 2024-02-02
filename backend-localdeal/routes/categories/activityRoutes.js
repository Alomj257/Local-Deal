// routes/categories/activityRoutes.js
const express = require('express');
const activityController = require('../../controllers/categories/activityController');

const router = express.Router();

router.get('/activities', activityController.getAllActivities);
router.get('/activities/:id', activityController.getActivityById);
router.post('/activities', activityController.createActivity);
router.put('/activities/:id', activityController.updateActivity);
router.delete('/activities/:id', activityController.deleteActivity);

module.exports = router;
