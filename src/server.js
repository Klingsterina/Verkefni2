import express from 'express';
import { router } from './routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config(); // Loads environment variables from .env

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fix `viewsPath` for Render compatibility
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viewsPath = path.join(__dirname, 'views');
console.log(`Views path: ${viewsPath}`);

app.set('views', viewsPath);
app.set('view engine', 'ejs');

// Use the router
app.use('/', router);

// Dynamic port for Render
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
