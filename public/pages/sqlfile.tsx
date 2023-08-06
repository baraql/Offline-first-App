// index.ts
import * as fs from 'fs';
import * as sqlite3 from 'sqlite3';

// Function to read the SQL file and return its contents as a string
function readSQLFile(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function main() {
    try {
        const sqlFilePath = 'data.sql';
        const sql = await readSQLFile(sqlFilePath);

        // Connect to the SQLite database (creates a new database file if it doesn't exist)
        const db = new sqlite3.Database(':memory:');

        // Execute the SQL commands in the file
        db.exec(sql, (err) => {
            if (err) {
                throw err;
            }

            // Run the SELECT statement
            db.all('SELECT * FROM users', (err, rows) => {
                if (err) {
                    throw err;
                }

                console.log('Results of SELECT statement:');
                console.log(rows);
            });
        });
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
