const express = require('express');
const router = express.Router();
const LeaveController = require('../controllers/LeaveController'); // Importer le contrôleur

// Routes pour l'API Employé
router.post('/conge/create', (req, res) => LeaveController.store(req, res)); 
router.get('/conge', (req, res) => LeaveController.getAll(req, res)); 
router.get('/conge/:id', (req, res) => LeaveController.getById(req, res));
router.put('/conge/:id', (req, res) => LeaveController.update(req, res)); 
router.delete('/conge/:id', (req, res) => LeaveController.delete(req, res)); // Supprimer un employé

module.exports = router;
