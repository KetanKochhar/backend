//is scipt ko rum karke ham databse ka schme bana sakte hai wapis par phele isko hi run karna hoga 
const sqlite3 = require('better-sqlite3');

const db = new sqlite3('database/customwear.db', { verbose: console.log });

db.exec(`
    CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        dob DATE,
        phone_number TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS Designs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        color TEXT NOT NULL,
        front_canvas_json TEXT,
        back_canvas_json TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users(id)
    );
    CREATE TABLE IF NOT EXISTS Cart (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        design_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 1,
        size TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users(id),
        FOREIGN KEY (design_id) REFERENCES Designs(id)
    );
    CREATE TABLE IF NOT EXISTS Orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        design_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        size TEXT NOT NULL,
        customer_name TEXT NOT NULL,
        shipping_address TEXT NOT NULL,
        pincode TEXT NOT NULL,
        city TEXT NOT NULL,
        phone_number TEXT NOT NULL,
        email TEXT NOT NULL,
        payment_method TEXT NOT NULL DEFAULT 'COD',
        total_price REAL NOT NULL,
        status TEXT NOT NULL DEFAULT 'Pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users(id),
        FOREIGN KEY (design_id) REFERENCES Designs(id)
    );
    CREATE TABLE IF NOT EXISTS OTPs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        otp_code TEXT NOT NULL,
        expires_at DATETIME NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users(id)
    );
    CREATE TABLE IF NOT EXISTS TColor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        forname TEXT NOT NULL,
        name TEXT NOT NULL,
        color TEXT NOT NULL,
        dark_color TEXT NOT NULL
    );
`);

module.exports = db;