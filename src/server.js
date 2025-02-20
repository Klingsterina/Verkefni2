/*
Keyrt með:
node 05.router-app.js

Keyrir express app sem notar router úr 05.router.js ásamt því að skilgreina
eigið route á app sem notar redirect til að flytja á /foo.
Öll route úr 05.router.js eru aðgengileg undir /foo
*/

import express from 'express';
import { router } from './routes.js';

const app = express();
app.use(express.static('public'));

import { fileURLToPath } from 'url';

const viewsPath = fileURLToPath(new URL('./views', import.meta.url));
console.log(viewsPath);

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use('/', router);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});