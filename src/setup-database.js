import { readFile } from 'node:fs/promises';
import pg from 'pg';

const SCHEMA_FILE = './sql/create.sql';
const DROP_SCHEMA_FILE = './sql/drop.sql';
const INSERT_FILE = './sql/insert.sql';

async function setupDbFromFiles(db) {
  const dropScript = await readFile(DROP_SCHEMA_FILE);
  const createScript = await readFile(SCHEMA_FILE);
  const insertScript = await readFile(INSERT_FILE);

  if (await db.query(dropScript.toString('utf-8'))) {
    console.info('schema dropped');
  } else {
    console.info('schema not dropped, exiting');
    return false;
  }

  if (await db.query(createScript.toString('utf-8'))) {
    console.info('schema created');
  } else {
    console.info('schema not created');
    return false;
  }

  if (await db.query(insertScript.toString('utf-8'))) {
    console.info('inserted data');
  } else {
    console.info('data not inserted');
    return false;
  }

  return true;
}

async function create() {

  if (!process.env) {
    process.exit(1);
  }
  const { Client } = pg;
    const db = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await db.connect();
    await setupDbFromFiles(db);

}

create().catch((err) => {
  console.error('error running setup', err);
}).finally(() => {
  process.exit();
});