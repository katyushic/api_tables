const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '91.184.243.26',
    database: 'my_database',
    password: 'pupupu',
    port: 5432,
});

module,exports = {
    pool
}