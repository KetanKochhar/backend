const express = require('express');
const auth = require('..//utils/auth');
const dbconnection = require("..//utils/db")

const router = express.Router();

router.get("/profile", auth.isAuthenticated, async (request, response) => {
  const uid = await dbconnection.getUserByEmail(request.session.email)
  const designs = await dbconnection.getDesignsByUserIdnumber(uid.id)
  console.log(designs.length)
  const id = []
  const name = []
  const type = []
  const color = []
  const fcjp = []
  const bcjp = []
  const price = []
  for (let i = 0; i < designs.length; i++) {
    // console.log(designs[i].id)
    id.push(designs[i].id)
    // console.log(designs[i].name)
    name.push(designs[i].name)
    // console.log(designs[i].type)
    type.push(designs[i].type)
    // console.log(designs[i].color)
    color.push(designs[i].color)
    // console.log(JSON.parse(designs[i].front_canvas_json).preview)
    fcjp.push(JSON.parse(designs[i].front_canvas_json).preview)
    // console.log(JSON.parse(designs[i].back_canvas_json).preview)
    bcjp.push(JSON.parse(designs[i].back_canvas_json).preview)
    price.push(designs[i].price)
  }
  const add = await dbconnection.GetAddress(uid.id)
  response.render("profile", {user:request.session.user ,address:add , userid: uid.id, username: request.session.user, id: id, name: name, type: type, color: color, fcjp: fcjp, bcjp: bcjp, price: price })
})

router.get('/cart', auth.isAuthenticated, async (req, res) => {
  try {
      const userId = await dbconnection.getUserByEmail(req.session.email);
      const cartItems = await dbconnection.getCart(userId.id);
      res.render('cart', { cartItems, user: req.session.user});
  } catch (error) {
      console.error('Error rendering cart page:', error);
      res.status(500).send('Server error while loading cart.');
  }
});

router.post('/confirm-order',async (req, res) => {
  const {user_id,design_id,quantity,size,customer_name,shipping_address,pincode,city,phone_number,email,payment_method,total_price} = req.body;
  const orderData = {user_id,design_id,quantity,size,customer_name,shipping_address,pincode,city,phone_number,email,payment_method,total_price};
  const data = await dbconnection.addorder(orderData);
    res.json({ success: true, orderId: result.orderId });

});


// Update cart item quantity
router.post("/update-cart", async (req, res) => {
  const { itemId, newQuantity } = req.body;
  const item = await CartItem.findById(itemId);
  if (item) {
    item.quantity = newQuantity;
    await item.save();
    res.json({ price: item.price * newQuantity });
  } else {
    res.status(404).send("Item not found");
  }
});

// Remove item from cart
router.post("/remove-item", async (req, res) => {
  const { itemId } = req.body;
  const item = await CartItem.findById(itemId);
  if (item) {
    await item.remove();
    res.status(200).send("Item removed");
  } else {
    res.status(404).send("Item not found");
  }
});


router.post('/api/address', (req, res) => {
  const { user_id, address, pincode, city, area } = req.body;
  const data = dbconnection.addAddress(user_id, address, pincode, city, area);
  res.redirect("/profile")
})

router.post('/api/update-address', async (req, res) => {
  const { user_id, address, pincode, city, area } = req.body;

  if (!user_id || !address || !pincode || !city || !area) {
      return res.status(400).json({ error: 'All fields are required for updating address.' });
  }

  try {
      const result = await dbconnection.updateAddress(user_id, address, pincode, city, area);
      if (result && result.changes >= 0) {
          res.status(200).json({ message: result.changes > 0 ? 'Address updated successfully!' : 'No changes made.' });
      } else {
          res.status(404).json({ error: 'User not found or no changes.' });
      }
  } catch (error) {
      console.error('Error updating address:', error);
      res.status(500).json({ error: 'Server error while updating address.' });
  }
});

router.post("/check-promo", async (request, response) => {
  const { promo } = request.body;
  try {
    const data = await dbconnection.getpromo(promo);
    if (!data || data.length === 0) {
      return response.status(400).json({ error: "Invalid promo code" });
    }
    const discount = data[0].discount;
    request.session.promoApplied = true;
    request.session.discount = discount;
    response.json({ discount }); // send discount as JSON
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: "Server error" });
  }
});

router.post('/api/add-to-cart', async (req, res) => {
  const { user_id, design_id, quantity, size } = req.body;

  if (!user_id || !design_id || !quantity || !size) {
      return res.status(400).json({ error: 'All fields (user_id, design_id, quantity, size) are required.' });
  }
  if (quantity < 1 || quantity > 100) {
      return res.status(400).json({ error: 'Quantity must be between 1 and 100.' });
  }

  try {
      const existingItem = await dbconnection.getCartItem(user_id, design_id, size);
      if (existingItem) {
          const newQuantity = Math.min(existingItem.quantity + quantity, 100);
          await dbconnection.updateCartQuantity(user_id, design_id, newQuantity, size);
          return res.status(200).json({ message: 'Cart quantity updated successfully!' });
      }
      await dbconnection.addToCart(user_id, design_id, quantity, size);
      return res.status(200).json({ message: 'Item added to cart successfully!' });
  } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ error: 'Server error while adding to cart.' });
  }
});

// Get cart
router.get('/api/cart', auth.isAuthenticated, async (req, res) => {
  try {
      const user_id = req.session.user_id;
      const cartItems = await dbconnection.getCart(user_id);
      res.json(cartItems);
  } catch (error) {
      console.error('Error fetching cart:', error);
      res.status(500).json({ error: 'Server error while fetching cart.' });
  }
});
module.exports = router;