const express = require('express');
const router = express.Router();
const dbconnection = require('../utils/db');
const auth = require('../utils/auth');
const sqlite3 = require('better-sqlite3');
const db = new sqlite3('database/customwear.db');
const path = require('path');
const multer = require('multer');

// Admin Dashboard
router.get("/admin", auth.isAdmin, async (req, res) => {
  try {
    const totalOrders = await dbconnection.getTotalOrders();
    const totalUsers = await dbconnection.getTotalUsers();
    const totalRevenue = await dbconnection.getTotalRevenue();

    res.render("admin/home", {
      totalOrders,
      users: totalUsers,
      revenue: totalRevenue.toFixed(2)
    });
  } catch (error) {
    console.error("Error loading admin panel:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Color management
router.get("/admin/color", auth.isAdmin, async (req, res) => {
  const polocolor = await dbconnection.getpolocolors();
  const cottoncolor = await dbconnection.getcottoncolors();
  const sportscolor = await dbconnection.getsportscolors();
  res.render("admin/color", { polo: polocolor, cotton: cottoncolor, sports: sportscolor });
});

router.post('/add-color', (req, res) => {
  const { forname, name, colorName, darkColor } = req.body;
  dbconnection.addColorToDB(forname, name, colorName, darkColor);
  res.redirect('/admin');
});

// Promo code management
router.get("/admin/promo", auth.isAdmin, async (req, res) => {
  const promo = await dbconnection.getallpromo();
  res.render("admin/promo", { promo });
});

router.post("/add-promo", (req, res) => {
  const { code, dis, uses } = req.body;
  dbconnection.addpromo(code, dis, uses);
  res.redirect("/admin");
});

// Order Management
router.get('/admin/order', auth.isAdmin, async (req, res) => {
  try {
    const orders = await dbconnection.getAllOrders();

    const enrichedOrders = orders.map(order => {
      let frontPreview = null, backPreview = null;
      let frontsizeLabels = [], backsizeLabels = [];
      let frontimages = [], backimages = [];
      let usedfrontgraphics = [], usedbackgraphics = [];
      let frontObjectCount = 0, backObjectCount = 0;

      try {
        const front = JSON.parse(order.front_canvas_json || '{}');
        frontPreview = front?.preview || null;
        frontimages = front?.json?.objects || [];
        frontObjectCount = frontimages.length;

        frontimages.forEach(obj => {
          if (obj.type === 'image' && obj.src) usedfrontgraphics.push(obj.src);
          if (obj.type === 'sizeLabel' && obj.text) frontsizeLabels.push(obj.text);
        });
      } catch (err) {
        console.error(`Failed to parse front_canvas_json for order ${order.id}`);
      }

      try {
        const back = JSON.parse(order.back_canvas_json || '{}');
        backPreview = back?.preview || null;
        backimages = back?.json?.objects || [];
        backObjectCount = backimages.length;

        backimages.forEach(obj => {
          if (obj.type === 'image' && obj.src) usedbackgraphics.push(obj.src);
          if (obj.type === 'sizeLabel' && obj.text) backsizeLabels.push(obj.text);
        });
      } catch (err) {
        console.error(`Failed to parse back_canvas_json for order ${order.id}`);
      }

      return {
        ...order,
        frontPreview,
        frontimages,
        frontObjectCount,
        usedfrontgraphics,
        frontsizeLabels,
        backPreview,
        backimages,
        backObjectCount,
        usedbackgraphics,
        backsizeLabels,
      };
    });

    res.render('admin/order', { orders: enrichedOrders });

  } catch (err) {
    console.error("Failed to fetch orders:", err);
    res.status(500).send("Server error");
  }
});


// ================================
// 📊 Dynamic Database Table Routes
// ================================

// Get all table names
router.get('/admin/api/tables', auth.isAdmin, (req, res) => {
  try {
    const tables = db.prepare(`
      SELECT name FROM sqlite_master
      WHERE type='table' AND name NOT LIKE 'sqlite_%'
    `).all();
    res.json(tables.map(t => t.name));
  } catch (err) {
    console.error("Error fetching table names:", err);
    res.status(500).json({ error: err.message });
  }
});

// Get table data
router.get('/admin/api/table/:name', auth.isAdmin, (req, res) => {
  try {
    const name = req.params.name;
    const stmt = db.prepare(`SELECT * FROM ${name}`);
    const rows = stmt.all();
    res.json(rows);
  } catch (err) {
    console.error("Error fetching table data:", err);
    res.status(500).json({ error: err.message });
  }
});

// Update row by ID in any table
router.post('/admin/api/table/:name/update', auth.isAdmin, (req, res) => {
  const table = req.params.name;
  const { id, updates } = req.body;

  try {
    const setClause = Object.keys(updates).map(key => `${key} = ?`).join(", ");
    const values = Object.values(updates);
    const stmt = db.prepare(`UPDATE ${table} SET ${setClause} WHERE id = ?`);
    stmt.run(...values, id);
    res.json({ success: true });
  } catch (err) {
    console.error("Error updating row:", err);
    res.status(500).json({ error: err.message });
  }
});


// Configure multer
const storage = multer.diskStorage({
  destination: './public/images/products/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Accept 3 file fields
const multiUpload = upload.fields([
  { name: 'front_image', maxCount: 1 },
  { name: 'back_image', maxCount: 1 },
]);


// GET form
router.get('/addproduct', (req, res) => {
  res.render('admin/addproduct'); // renders EJS form
});



router.post('/addproduct', multiUpload, (req, res) => {
  const { name, price, actual_price, discount, material, gender } = req.body;

  const front_image = req.files['front_image'] ? 'images/products/' + req.files['front_image'][0].filename : null;
  const back_image = req.files['back_image'] ? 'images/products/' + req.files['back_image'][0].filename : null;
  const graphics = req.files['graphics'] ? 'images/products/' + req.files['graphics'][0].filename : null;

  db.prepare(`
    INSERT INTO ShopProducts (name, front_image, back_images, graphics, price, actual_price, discount, material, gender)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(name, front_image, back_image, graphics, price, actual_price, discount, material, gender);

  res.redirect('/admin/addproduct');
});





module.exports = router;
