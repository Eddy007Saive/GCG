const express = require('express');
const router = express.Router();
const DepartementController = require('../controllers/DepartementController'); // Importer le contrôleur

// Routes pour l'API Employé
router.post('/departement/create', (req, res) => DepartementController.store(req, res)); 
router.get('/departements', (req, res) => DepartementController.getAll(req, res)); 
router.get('/departement/:id', (req, res) => DepartementController.getById(req, res));
router.put('/departement/:id', (req, res) => DepartementController.update(req, res)); 
router.delete('/departement/:id', (req, res) => DepartementController.delete(req, res)); // Supprimer un employé
router.get('/departement', (req, res) => DepartementController.search(req,res))

module.exports = router;
