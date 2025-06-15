const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');

require('dotenv').config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

router.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ success: false, message: "Amount is required" });
    }

    const order = await razorpay.orders.create({
      amount: parseInt(amount) * 100, // Razorpay expects amount in paisa
      currency: 'INR',
      receipt: `receipt_order_${Date.now()}`
    });

    res.json({ success: true, order });

  } catch (error) {
    console.error("Razorpay create order error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
      error: error.message
    });
  }
});

module.exports = router;
