const express = require('express');
const dbconnection = require("..//utils/db");
const { name } = require('ejs');

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const products = await dbconnection.getAllProducts(); // fixed
    res.render("home", { user: req.session.user, products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Something went wrong.");
  }
});

module.exports = router;