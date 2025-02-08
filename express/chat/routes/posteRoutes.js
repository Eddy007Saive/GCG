const express = require('express');
const router = express.Router();
const PosteController = require('../controllers/PosteController'); // Importer le contrôleur

// Routes pour l'API Employé
router.post('/poste/create', (req, res) => PosteController.store(req, res)); 
router.get('/postes', (req, res) => PosteController.getAll(req, res)); 
router.get('/poste/:id', (req, res) => PosteController.getById(req, res));
router.put('/poste/:id', (req, res) => PosteController.update(req, res)); 
router.delete('/poste/:id', (req, res) => PosteController.delete(req, res)); // Supprimer un employé
router.get('/poste', (req, res) => PosteController.search(req,res))

module.exports = router;
