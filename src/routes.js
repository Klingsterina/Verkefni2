/*
Keyrt með:
node 05.router-app.js

Skilgreinum routes fyrir express app skilgreint í 05.router-app.js
*/

import { getDatabase } from './lib/db.js';

import express from 'express';

export const router = express.Router();

// const db = new Database(process.env.database);

router.get('/', async (req, res) => {
  const categories = await getDatabase()?.getAllCategories();
  res.render('index', {title: 'Forsíða', categories});
});

// Náum í gögn úr /bar route
// Ef við sleppum ? svarar þetta ekki fyrir /bar, aðeins /bar/x, /bar/foo o.sfr.
router.get('/spurningar/:category', async (req, res) => { 
  const questions = await getDatabase()?.getQuestions(req.params.category);
  res.render('questions', {questions});

});

router.get('/form', (req, res) => {
  res.send('Form');
});