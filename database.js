const sqlite3 = require('better-sqlite3');
const db = new sqlite3('database/customwear.db', { verbose: console.log });

try {
    // Step 1: Create All Tables (including Users_temp)
    db.exec(`
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name TEXT,
            dob DATE,
            phone_number TEXT,
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
            price INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES Users(id)
        );

        CREATE TABLE IF NOT EXISTS Cart (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            design_id INTEGER NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES Users(id),
            FOREIGN KEY (design_id) REFERENCES Designs(id)
        );

        CREATE TABLE IF NOT EXISTS Orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            design_name TEXT NOT NULL,
            design_type TEXT NOT NULL,
            design_color TEXT NOT NULL,
            front_canvas_json TEXT,
            back_canvas_json TEXT,
            design_price INTEGER,
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
            FOREIGN KEY (user_id) REFERENCES Users(id)
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

        CREATE TABLE IF NOT EXISTS Promo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code TEXT NOT NULL,
            discount INTEGER NOT NULL,
            uses INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Addresses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            address TEXT NOT NULL,
            pincode TEXT NOT NULL,
            city TEXT NOT NULL,
            area TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES Users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS ShopProducts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            front_image TEXT,
            back_images TEXT,
            graphics TEXT,
            price INTEGER NOT NULL,
            actual_price INTEGER,
            discount INTEGER,
            material TEXT,
            gender TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS ShopOrders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id INTEGER NOT NULL,
            product_name TEXT NOT NULL,
            product_image TEXT,
            material TEXT,
            gender TEXT,
            user_id INTEGER NOT NULL,
            customer_name TEXT NOT NULL,
            phone_number TEXT NOT NULL,
            email TEXT NOT NULL,
            shipping_address TEXT NOT NULL,
            pincode TEXT NOT NULL,
            city TEXT NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 1,
            size TEXT NOT NULL,
            price INTEGER NOT NULL,
            actual_price INTEGER,
            discount INTEGER,
            total_price INTEGER NOT NULL,
            payment_method TEXT NOT NULL,
            status TEXT DEFAULT 'Pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS Users_temp (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            google_id TEXT,
            first_name TEXT,
            last_name TEXT,
            dob DATE,
            phone_number TEXT,
            email TEXT NOT NULL UNIQUE,
            password TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        INSERT INTO Users_temp (id, first_name, last_name, dob, phone_number, email, password, created_at)
        SELECT id, first_name, last_name, dob, phone_number, email, password, created_at FROM Users;
    `);

    // Temporarily disable foreign key checks
    db.pragma('foreign_keys = OFF');

    // Drop the original Users table
    db.exec(`DROP TABLE IF EXISTS Users;`);

    // Rename Users_temp to Users
    db.exec(`ALTER TABLE Users_temp RENAME TO Users;`);

    // Re-enable foreign key checks
    db.pragma('foreign_keys = ON');

    console.log("✅ Users table updated. 'password' is now nullable and 'google_id' added.");

} catch (err) {
    console.error("❌ Migration error:", err.message);
}

module.exports = db;
