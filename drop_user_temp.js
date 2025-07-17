// drop-users-temp.js
const sqlite3 = require('better-sqlite3');
const db = sqlite3('database/customwear.db');

db.prepare('DROP TABLE IF EXISTS Users_temp').run();

console.log('✅ Users_temp table dropped successfully.');
