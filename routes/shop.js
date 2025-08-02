// routes/shop.js
const express = require('express');
const router = express.Router();
const db = require('../utils/db');

router.get("", (req, res) => {
  try {
    const stmt = db.prepare("SELECT * FROM ShopProducts ORDER BY created_at DESC");
    const products = stmt.all();

    res.render("home", { user: req.session.user, products });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).send("Error loading products.");
  }
});

module.exports = router;
