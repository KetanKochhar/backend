const express = require('express');
const auth = require('../utils/auth');
const sqlite3 = require('better-sqlite3');
const db = new sqlite3('database/customwear.db');
const dbconnection = require("../utils/db")

const router = express.Router();


router.get('/myorders', auth.isAuthenticated, async (req, res) => {
    try {
        // Get user info
        const user = await dbconnection.getUserByEmail(req.session.email);
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Get orders placed by this user
        const orders = await dbconnection.getOrdersByUserId(user.id);  // <-- implement this function

        // Prepare arrays for EJS rendering
        const orderIds = [];
        const designNames = [];
        const types = [];
        const colors = [];
        const frontPreviews = [];
        const backPreviews = [];
        const prices = [];
        const sizes = [];
        const quantities = [];
        const statuses = [];
        const orderDates = [];

        for (let i = 0; i < orders.length; i++) {
            orderIds.push(orders[i].id);
            designNames.push(orders[i].design_name);
            types.push(orders[i].design_type);
            colors.push(orders[i].design_color);
            frontPreviews.push(JSON.parse(orders[i].front_canvas_json).preview);
            backPreviews.push(JSON.parse(orders[i].back_canvas_json).preview);
            prices.push(orders[i].total_price);
            sizes.push(orders[i].size);
            quantities.push(orders[i].quantity);
            statuses.push(orders[i].status);
            orderDates.push(orders[i].created_at);
        }


        // Render the EJS page
        res.render('myorders', {
            user: user,
            userid: user.id,
            username: req.session.user,

            orderIds: orderIds,
            designNames,
            types,
            colors,
            frontPreviews,
            backPreviews,
            prices,
            sizes,
            quantities,
            statuses,
            orderDates
        });
    } catch (error) {
        console.error('Error loading myorders:', error);
        res.status(500).send('Internal Server Error', error);
    }
});

router.get('/promo/:code', (req, res) => {
    const code = req.params.code.toUpperCase();
  
    try {
      const promo = db.prepare(`
        SELECT * FROM Promo
        WHERE code = ? AND uses > 0 AND DATE(vaild_till) >= DATE('now')
      `).get(code);
  
      if (!promo) {
        return res.status(404).json({ success: false, message: 'Invalid or expired promo code' });
      }
  
      res.json({
        success: true,
        promo: {
          code: promo.code,
          discount: promo.discount
        }
      });
    } catch (err) {
      console.error('Error checking promo code:', err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });
module.exports = router;