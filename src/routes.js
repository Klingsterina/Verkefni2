import { getDatabase } from './lib/db.js';
import express from 'express';
export const router = express.Router();
import xss from 'xss';

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
  res.render('form', { title: 'Búa til flokk' });
});

router.get('/form-created', (req, res) => {
  res.render('form-created', { title: 'Flokkur búinn til' });
});

router.post('/form', async (req, res) => {
  try {
    console.log('POST /form');
    console.log(req.body); // Debugging received data

    const { question, category, answers, correctAnswer } = req.body;
    const cleanQuestion = xss(question);

    await getDatabase()?.createQuestion(cleanQuestion, category, answers, correctAnswer);

    if (req.headers.accept === 'application/json') {
      return res.json({ success: true, redirect: "/form-created" });
    }

    res.status(201).render('form-created', { title: 'Flokkur búinn til' });

  } catch (e) {
    console.error('Villa við að búa til spurningu', e);

    if (req.headers.accept === 'application/json') {
      return res.status(500).json({ success: false, redirect: "/form-error" });
    }

    res.render('form-error', { title: 'Villa við að búa til spurningu' });
  }
});
