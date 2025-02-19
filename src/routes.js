/*
Keyrt með:
node 05.router-app.js

Skilgreinum routes fyrir express app skilgreint í 05.router-app.js
*/

import express from 'express';

export const router = express.Router();

router.get('/', (req, res) => {
  res.send('Forsíða');
});


// Náum í gögn úr /bar route
// Ef við sleppum ? svarar þetta ekki fyrir /bar, aðeins /bar/x, /bar/foo o.sfr.
router.get('/spurningar/:category', (req, res) => {
  res.send(`Spurningaflokkur = ${req.params.category}`);
});

router.get('form', (req, res) => {
  res.send('Form');
});