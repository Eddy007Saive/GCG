const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController'); // Importer le contrôleur

// Routes pour l'API Employé
router.post('/employees/create', (req, res) => EmployeeController.store(req, res)); 
router.get('/employees', (req, res) => EmployeeController.getAll(req, res)); 
router.get('/employees/:id', (req, res) => EmployeeController.getById(req, res));
router.put('/employees/:id', (req, res) => EmployeeController.update(req, res)); 
router.delete('/employees/:id', (req, res) => EmployeeController.delete(req, res)); // Supprimer un employé
router.get('/employee', (req, res) => EmployeeController.search(req,res))
module.exports = router;
