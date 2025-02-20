import pg from 'pg';

//Grunnur að database klasa fenginn frá sýnilausn vef2-2024-v2-synilausn
//Sótt voru open, close, connect og query föllin fyrir database klasann og getDatabase fallið
export class Database {

    /**
   * Create a new database connection.
   * @param {string} connectionString
   */
    constructor(connectionString) {
        this.connectionString = connectionString;
    }

  open() {
    this.pool = new pg.Pool({ connectionString: this.connectionString });

    this.pool.on('error', (err) => {
      console.error('error in database pool', err);
      this.close();
    });
  }

  /**
   * Close the database connection.
   * @returns {Promise<boolean>}
   */
  async close() {
    if (!this.pool) {
      console.error('unable to close database connection that is not open');
      return false;
    }

    try {
      await this.pool.end();
      return true;
    } catch (e) {
      console.error('error closing database pool', { error: e });
      return false;
    } finally {
      this.pool = null;
    }
  }


  /**
   * Connect to the database via the pool.
   * @returns {Promise<pg.PoolClient | null>}
   */
  async connect() {
    if (!this.pool) {
      console.error('Reynt að nota gagnagrunn sem er ekki opinn');
      return null;
    }

    try {
      const client = await this.pool.connect();
      return client;
    } catch (e) {
      console.error('error connecting to db', { error: e });
      return null;
    }
  }

  /**
   * Run a query on the database.
   * @param {string} query SQL query.
   * @param {Array<string>} values Parameters for the query.
   * @returns {Promise<pg.QueryResult | null>} Result of the query.
   */
  async query(query, values = []) {
    const client = await this.connect();

    if (!client) {
      return null;
    }

    try {
      const result = await client.query(query, values);
      return result;
    } catch (e) {
      console.error('Error running query', e);
      return null;
    } finally {
      client.release();
    }
  }

  async getAllCategories() {
    const result = await this.query('SELECT * FROM category');
    return result.rows;
  }

  async getQuestions(category) {
    const q = "SELECT q.id as id, q.text, c.name as category from question as q join category as c on q.category_id = c.id where c.name = $1";
    const result = await this.query(q, [category]);
    return result.rows;

  }

}

/** @type {Database | null} */
let db = null;

/**
 * Return a singleton database instance.
 * @returns {Database | null}
 */
export function getDatabase() {
  if (db) {
    return db;
  }


  if (!process.env) {
    return null;
  }
  db = new Database(process.env.DATABASE_URL);
  db.open();

  return db;
}