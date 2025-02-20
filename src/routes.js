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
  const categoryName = req.params.category;
  const questions = await getDatabase()?.getQuestions(categoryName);
  res.render('questions', { questions, categoryName }); // Pass only categoryName
});


router.get('/form', (req, res) => {
  res.render('form');
});