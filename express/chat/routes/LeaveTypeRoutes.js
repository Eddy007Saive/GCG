const express = require('express');
const router = express.Router();
const LeaveTypeController = require('../controllers/LeaveTypeController'); // Importer le contrôleur

// Routes pour l'API Employé
router.post('/congetype/create', (req, res) => LeaveTypeController.store(req, res)); 
router.get('/congetype', (req, res) => LeaveTypeController.getAll(req, res)); 
router.get('/congetype/:id', (req, res) => LeaveTypeController.getById(req, res));
router.put('/congetype/:id', (req, res) => LeaveTypeController.update(req, res)); 
router.delete('/congetype/:id', (req, res) => LeaveTypeController.delete(req, res)); // Supprimer un employé

module.exports = router;
