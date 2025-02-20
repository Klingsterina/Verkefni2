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

  // const questions = [
  //   { 
  //     id: 1,
  //     text: 'Spurning 1',
  //     category: 'Flokkur 1',
  //     answers: [
  //       { text: 'Svarmöguleiki 1', isCorrect: true },
  //       { text: 'Svarmöguleiki 2', isCorrect: false },
  //       { text: 'Svarmöguleiki 3', isCorrect: false },
  //       { text: 'Svarmöguleiki 4', isCorrect: false },
  //     ]
  //   }
  // ]
  res.render('questions', { questions, categoryName }); // Pass only categoryName
});


router.get('/form', (req, res) => {
  res.render('form', { title: 'Búa til flokk' });
});

router.post('/form', async (req, res) => {
  try {
    console.log('POST /form');
    console.log(req);
    // xss 
    const { name } = req.body;
    const cleanName = xss(name);
    console.log(cleanName);
    // insert into database
  
    // const { name } = req.body;
    // await getDatabase()?.createQuestion(name);

  } catch (e) {
    console.error('Villa við að búa til flokk', e);
    console.error(e);
  }

  // Hér þarf að setja upp validation, hvað ef name er tómt? hvað ef það er allt handritið að BEE MOVIE?
  // Hvað ef það er SQL INJECTION? HVAÐ EF ÞAÐ ER EITTHVAÐ ANNAÐ HRÆÐILEGT?!?!?!?!?!
  // TODO VALIDATION OG HUGA AÐ ÖRYGGI

  // Ef validation klikkar, senda skilaboð um það á notanda

  res.render('form-created', { title: 'Flokkur búinn til' });
});