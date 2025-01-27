const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const employeeRoutes = require('./routes/employeeRoutes'); // Importer les routes
const LeaveRoutes = require('./routes/LeaveRoutes'); // Importer les routes
const LeaveTypeRoutes = require('./routes/LeaveTypeRoutes'); // Importer les routes

const app = express();

// Middleware pour logger les requêtes
app.use(logger('dev'));

// Middleware pour parser les requêtes JSON et URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware pour les cookies (si nécessaire)
app.use(cookieParser());

// Charger les routes pour les employés sous le préfixe `/api`
app.use('/api', employeeRoutes);
app.use('/api', LeaveRoutes);
app.use('/api', LeaveTypeRoutes);


// Gérer les erreurs 404 (route non trouvée)
app.use((req, res, next) => {
  next(createError(404)); // Cela passera au gestionnaire d'erreurs ci-dessous
});

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  // Définir les détails de l'erreur
  const status = err.status || 500;
  const response = {
    status,
    message: err.message || 'Erreur interne du serveur',
    ...(req.app.get('env') === 'development' && { stack: err.stack }), // Afficher la stack trace en développement uniquement
  };

  // Envoyer une réponse JSON
  res.status(status).json(response);
});

module.exports = app;
