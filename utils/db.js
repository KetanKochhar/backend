const sqlite3 = require('better-sqlite3');
const bcrypt = require('bcrypt');

const database = new sqlite3("database/customwear.db");
//saltround matabl kitni bar data encrypt karega store karne se phele jada hua tho server se load padega and kam hua tho user data risk pe hoga isliye basic 10 rahka hai change kar sakte hai 
const saltRounds = 10;


async function addUser(firstName, lastName, dob, phoneNumber, email, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const stmt = database.prepare(`
            INSERT INTO Users (first_name, last_name, dob, phone_number, email, password)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        const info = stmt.run(firstName, lastName, dob, phoneNumber, email, hashedPassword);
        return info.lastInsertRowid;
    } catch (error) {
        console.error('Error adding user:', error.message);
        if (error.message.includes('UNIQUE constraint failed: Users.phone_number')) {
            throw new Error('Phone number already exists.');
        } else if (error.message.includes('UNIQUE constraint failed: Users.email')) {
            throw new Error('Email already exists.');
        }
        throw error;
    }
}

async function getUserByEmail(email) {
    try {
        const stmt = database.prepare(`
            SELECT id, first_name, last_name, dob, phone_number, email, password
            FROM Users
            WHERE email = ?
        `);
        return stmt.get(email);
    } catch (error) {
        console.error('Error getting user by email:', error.message);
        throw error;
    }
}


async function getUserByPhoneNumber(phoneNumber) {
    try {
        const stmt = database.prepare(`
            SELECT id
            FROM Users
            WHERE phone_number = ?
        `);
        return stmt.get(phoneNumber);
    } catch (error) {
        console.error('Error getting user by phone number:', error.message);
        throw error;
    }
}

async function comparePassword(plainPassword, hashedPassword) {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.error('Error comparing password:', error.message);
        throw error;
    }
}


async function saveOTPToDatabase(userId, otp) {
    try {
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes
        const stmt = database.prepare(`
            INSERT INTO OTPs (user_id, otp_code, expires_at)
            VALUES (?, ?, ?)
        `);
        const info = stmt.run(userId, otp, expiresAt.toISOString());
        return info.lastInsertRowid;
    } catch (error) {
        console.error('Error saving OTP to database:', error.message);
        throw error;
    }
}

async function getOTPFromDatabase(userId) {
    try {
        const stmt = database.prepare(`
            SELECT otp_code, expires_at
            FROM OTPs
            WHERE user_id = ?
            ORDER BY created_at DESC
            LIMIT 1
        `);
        return stmt.get(userId);
    } catch (error) {
        console.error('Error fetching OTP from database:', error.message);
        throw error;
    }
}

async function addColorToDB(forname, name, colorName, darkColor) {
    try {
        const stmt = database.prepare(`INSERT INTO TColor (forname,name,color, dark_color) VALUES (?,?,?, ?)`);
        const info = stmt.run(forname, name, colorName, darkColor)
        return info.lastInsertRowid;
    }
    catch (error) {
        console.error('Error adding color to database:', error.message);
        throw error;
    }
}

async function getpolocolors() {
    try {
        const stmt = database.prepare(`SELECT * FROM TColor WHERE forname = 'polo' ORDER BY id DESC `);
        const rows = stmt.all(); // synchronous call
        return rows;
    } catch (error) {
        console.error("Error fetching colors:", error.message);
        throw error;
    }
}
async function getcottoncolors() {
    try {
        const stmt = database.prepare(`SELECT * FROM TColor WHERE forname = 'cotton' ORDER BY id DESC `);
        const rows = stmt.all(); // synchronous call
        return rows;
    } catch (error) {
        console.error("Error fetching colors:", error.message);
        throw error;
    }
}
async function getsportscolors() {
    try {
        const stmt = database.prepare(`SELECT * FROM TColor WHERE forname = 'sports' ORDER BY id DESC `);
        const rows = stmt.all(); // synchronous call
        return rows;
    } catch (error) {
        console.error("Error fetching colors:", error.message);
        throw error;
    }
}

async function getUserIdByEmail(email) {
    const stmt = database.prepare(`SELECT id FROM Users WHERE email = ? LIMIT 1`);
    return stmt.get(email);
}

async function getDesignsByUserId(userId) {
    const stmt = database.prepare(`SELECT COUNT(*) as num FROM Designs WHERE user_id = ? `);
    return stmt.all(userId);
}
async function getDesignsByUserIdnumber(userId) {
    const stmt = database.prepare(`SELECT * from Designs WHERE user_id = ? `);
    return stmt.all(userId);
}

async function addDesign(userId, name, type, color, frontCanvasJson, backCanvasJson, price) {
    try {
        const insertStmt = database.prepare(`
            INSERT INTO Designs (user_id, name, type,color, front_canvas_json, back_canvas_json,price)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);

        const info = insertStmt.run(userId, name, type, color, frontCanvasJson, backCanvasJson, price);
        return info.lastInsertRowid;
    } catch (error) {
        console.error('Error adding design:', error.message);
        throw error;
    }
}

async function updateDesign(designID, front_canvas_json, back_canvas_json, price) {
    try {
        const updatesmt = database.prepare("UPDATE Designs SET front_canvas_json = ? , back_canvas_json = ?,price =? where id = ?;");
        const data = updatesmt.run(front_canvas_json, back_canvas_json, price, designID);
        return data
    }
    catch (error) {
        console.error("Error Updatinng the design : ", error.message);
        throw error;
    }
}

async function GetDesignById(id) {
    try {
        const smt = database.prepare("SELECT * FROM Designs WHERE userid = ?");
        const data = smt.all(id);
        return data
    } catch (error) {
        console.log("Error getting the data :", error.message)
    }
}

async function updateUserPassword(email, newPassword) {
    try {
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        const stmt = database.prepare(`
            UPDATE Users SET password = ? WHERE email = ?
        `);
        stmt.run(hashedPassword, email);
    } catch (error) {
        console.error("Error updating user password:", error.message);
        throw error;
    }
}

async function addpromo(name, discount, uses) {
    try {
        insersmt = database.prepare(`INSERT INTO Promo (code , discount , uses) VALUES (?,?,?)`)
        data = insersmt.run(name, discount, uses)
        return data.lastInsertRowid;
    }
    catch (error) {
        console.error(error);
    }
}
async function getpromo(name) {
    try {
        smt = database.prepare(`SELECT * FROM Promo WHERE code = ?`)
        data = smt.all(name)
        if (data[0].uses == 0) {
            return "max number of promo is been used";
        }
        rsmt = database.prepare(`UPDATE Promo SET uses = uses - 1 WHERE code = ?`)
        remove = rsmt.run(name)
        console.log("updated data is ", remove)
        return data
    } catch (error) {
        console.error(error)
    }
}

async function getallpromo() {
    try {
        smt = database.prepare(`SELECT * FROM Promo `)
        data = smt.all()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

async function addAddress(userid, address, pincode, city, area) {
    try {
        smt = database.prepare(`INSERT INTO Addresses (user_id, address, pincode, city, area) VALUES (?, ?, ?, ?, ?)`)
        data = smt.run(userid, address, pincode, city, area)
    } catch (error) {
        console.error(error)
    }
}

async function GetAddress(userid) {
    try {
        smt = database.prepare(`SELECT address, pincode, city, area FROM Addresses WHERE user_id = ?`)
        data = smt.get(userid)
        return data
    } catch (error) {
        console.error(error);
    }
}

async function updateAddress(userid, address, pincode, city, area) {
    try {
        const stmt = database.prepare(`UPDATE Addresses SET address = ?, pincode = ?, city = ?, area = ? WHERE user_id = ?`);
        const data = stmt.run(address, pincode, city, area, userid);
        console.log("Database update result:", data);
        return data; // 'data' will likely contain 'changes' property for SQLite
    } catch (error) {
        console.error("Error in updateAddress DB function:", error);
        throw error; // Re-throw to be caught by the API endpoint
    }
}

function updateUserProfile(user_id, first_name, last_name, phone) {
    const stmt = database.prepare(`
    UPDATE Users 
    SET first_name = ?, last_name = ?, phone_number = ? 
    WHERE id = ?
  `);
    return stmt.run(first_name, last_name, phone, user_id);
}


async function addToCart(user_id, design_id, quantity) {
    try {
        const stmt = database.prepare(`INSERT INTO Cart (user_id, design_id, quantity) VALUES (?, ?, ?)`);
        const data = stmt.run(user_id, design_id, quantity);
        return data; // { changes: number, lastInsertRowid: number }
    } catch (error) {
        console.error('Error in addToCart DB function:', error);
        throw error;
    }
}

async function updateCartQuantity(user_id, design_id, quantity) {
    try {
        const stmt = database.prepare(`UPDATE Cart SET quantity = ? WHERE user_id = ? AND design_id = ?`);
        const data = stmt.run(quantity, user_id, design_id);
        return data; // { changes: number }
    } catch (error) {
        console.error('Error in updateCartQuantity DB function:', error);
        throw error;
    }
}

async function getCartItem(user_id, design_id) {
    try {
        const stmt = database.prepare(`SELECT * FROM Cart WHERE user_id = ? AND design_id = ?`);
        const data = stmt.get(user_id, design_id);
        return data; // Object or undefined
    } catch (error) {
        console.error('Error in getCartItem DB function:', error);
        throw error;
    }
}

async function getCart(user_id) {
    try {
        const stmt = database.prepare(`SELECT c.*, d.name, d.price, JSON_EXTRACT(d.front_canvas_json, '$.preview') as preview 
                                     FROM Cart c 
                                     JOIN Designs d ON c.design_id = d.id 
                                     WHERE c.user_id = ?`);
        const data = stmt.all(user_id);
        return data; // Array of cart items with design details
    } catch (error) {
        console.error('Error in getCart DB function:', error);
        throw error;
    }
}

async function addorder(orderData, callback) {
    try {
        const { user_id, design_id, quantity, size, customer_name, shipping_address, pincode, city, phone_number, email, payment_method, total_price } = orderData;
        const query = database.prepare(`INSERT INTO Orders (user_id,design_id,quantity,size,customer_name,shipping_address,pincode,city,phone_number,email,payment_method,total_price) VALUES  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        const values = [user_id, design_id, quantity, size, customer_name, shipping_address, pincode, city, phone_number, email, payment_method, total_price];
        const data = query.run(values)
        console.log(data)
        return data
    }
    catch (error) {
        console.error("error while adding the order ", error)
        throw error;
    }

}

function getDesignById(id) {
    const stmt = database.prepare(`SELECT * FROM Designs WHERE id = ?`);
    return stmt.get(id); // returns a single row
}

async function deleteDesignById(id) {
    try {
        // Delete dependent references first
        database.prepare(`DELETE FROM Cart WHERE design_id = ?`).run(id);
        database.prepare(`DELETE FROM Orders WHERE design_id = ?`).run(id);

        // Now delete from Designs
        const stmt = database.prepare(`DELETE FROM Designs WHERE id = ?`);
        const result = stmt.run(id);

        return { deletedCount: result.changes };
    } catch (error) {
        console.error("Error deleting design:", error);
        return { deletedCount: 0 };
    }
}

function insertOrder(order) {
    const insert = database.prepare(`
    INSERT INTO Orders (
      user_id, design_id, quantity, size,
      customer_name, shipping_address, pincode,
      city, phone_number, email, payment_method,
      total_price
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

    const result = insert.run(
        order.user_id,
        order.design_id,
        order.quantity,
        order.size,
        order.customer_name,
        order.shipping_address,
        order.pincode,
        order.city,
        order.phone_number,
        order.email,
        order.payment_method,
        order.total_price
    );

    return result;
}


async function getTotalOrders() {
    try {
        const stmt = database.prepare("SELECT COUNT(*) AS total FROM Orders");
        const result = stmt.get(); // use `get()` instead of `all()` for single row
        return result.total;
    } catch (error) {
        console.error("Error getting total orders:", error);
        return 0;
    }
}


async function getTotalUsers() {
    try {
        const stmt = database.prepare("SELECT COUNT(*) AS total FROM Users");
        const result = stmt.get(); // use `get()` instead of `all()` for single row
        return result.total;
    } catch (error) {
        console.error("Error getting total orders:", error);
        return 0;
    }
}

function getTotalRevenue() {
    try {
        const stmt = database.prepare("SELECT SUM(total_price) AS total FROM Orders");
        const result = stmt.get(); // returns a single row
        return result.total || 0;
    } catch (error) {
        console.error("Error getting total revenue:", error);
        return 0;
    }
}

function getAllOrders() {
  const stmt = database.prepare(`
    SELECT
      /* ---- Orders columns ---- */
      o.id              AS order_id,
      o.user_id,
      o.design_id,
      o.quantity,
      o.size,
      o.customer_name,
      o.shipping_address,
      o.pincode,
      o.city,
      o.phone_number,
      o.email,
      o.payment_method,
      o.total_price,
      o.status,
      o.created_at      AS order_created_at,

      /* ---- Designs columns ---- */
      d.id              AS design_id,        -- same value as o.design_id but kept for completeness
      d.user_id         AS design_user_id,
      d.name            AS design_name,
      d.type            AS design_type,
      d.color           AS design_color,
      d.front_canvas_json,
      d.back_canvas_json,
      d.price           AS design_price,
      d.created_at      AS design_created_at

    FROM Orders  o
    LEFT JOIN Designs d ON o.design_id = d.id
    ORDER BY o.created_at DESC
  `);
  return stmt.all();       // returns an array of order objects with all design details
}






// smt = database.prepare(`delete from addresses`)
// data = smt.run()


module.exports = { addUser, getUserByEmail, getUserByPhoneNumber, comparePassword, saveOTPToDatabase, getOTPFromDatabase, addColorToDB, getpolocolors, getcottoncolors, getsportscolors, getUserIdByEmail, getDesignsByUserId, addDesign, updateDesign, getDesignsByUserIdnumber, updateUserPassword, GetDesignById, addpromo, getpromo, getallpromo, addAddress, GetAddress, updateUserProfile, updateAddress, addToCart, updateCartQuantity, getCartItem, getCart, addorder, deleteDesignById, getDesignById, insertOrder, getTotalOrders, getTotalUsers, getTotalRevenue, getAllOrders }