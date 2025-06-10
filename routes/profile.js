const express = require('express');
const auth = require('..//utils/auth');
const dbconnection = require("..//utils/db")

const router = express.Router();

router.get('/profile', auth.isAuthenticated, async (request, response) => {
  try {
    // Get user info by email stored in session
    const uid = await dbconnection.getUserByEmail(request.session.email);

    if (!uid) {
      return response.status(404).send('User not found');
    }

    // Get designs for the user
    const designs = await dbconnection.getDesignsByUserIdnumber(uid.id);


    // Prepare arrays for design details
    const id = [];
    const name = [];
    const type = [];
    const color = [];
    const fcjp = [];
    const bcjp = [];
    const price = [];

    for (let i = 0; i < designs.length; i++) {
      id.push(designs[i].id);
      name.push(designs[i].name);
      type.push(designs[i].type);
      color.push(designs[i].color);
      fcjp.push(JSON.parse(designs[i].front_canvas_json).preview);
      bcjp.push(JSON.parse(designs[i].back_canvas_json).preview);
      price.push(designs[i].price);
    }

    // Get address info for user
    const add = await dbconnection.GetAddress(uid.id);

    // Render profile page with full user info and designs
    response.render('profile', {
      user: uid,               // user object including dob, phone_number, etc.
      address: add || {},            // user address info
      userid: uid.id,
      username: request.session.user,
      id: id,
      name: name,
      type: type,
      color: color,
      fcjp: fcjp,
      bcjp: bcjp,
      price: price,
    });
  } catch (err) {
    console.error(err);
    response.status(500).send('Server error');
  }
});


router.get('/order/:designId', auth.isAuthenticated, async (req, res) => {
  try {
    const designId = req.params.designId;
    const user = await dbconnection.getUserByEmail(req.session.email);
    const address = await dbconnection.GetAddress(user.id);
    const design = await dbconnection.getDesignById(designId);

    if (!design) {
      return res.status(404).send("Design not found");
    }

    const designData = {
      id: design.id,
      name: design.name,
      type: design.type,
      color: design.color,
      front_preview: JSON.parse(design.front_canvas_json).preview,
      back_preview: JSON.parse(design.back_canvas_json).preview,
      price: design.price
    };

    res.render('order', {
      user: user,         // ✅ Use the full DB user object
      address: address,
      design: designData
    });

  } catch (error) {
    console.error("Error loading order page:", error);
    res.status(500).send("Internal Server Error hai bhai");
  }
});

router.post('/confirm-order', async (req, res) => {
  try {
    const result = dbconnection.insertOrder(req.body);
    res.json({ success: true, orderId: result.lastInsertRowid });
  } catch (error) {
    console.error("Insert Order Error:", error);
    res.json({ success: false });
  }
});






// router.get('/cart', auth.isAuthenticated, async (req, res) => {
//   try {
//       const userId = await dbconnection.getUserByEmail(req.session.email);
//       const cartItems = await dbconnection.getCart(userId.id);
//       res.render('cart', { cartItems, user: req.session.user});
//   } catch (error) {
//       console.error('Error rendering cart page:', error);
//       res.status(500).send('Server error while loading cart.');
//   }
// });

// router.post('/confirm-order',async (req, res) => {
//   const {user_id,design_id,quantity,size,customer_name,shipping_address,pincode,city,phone_number,email,payment_method,total_price} = req.body;
//   const orderData = {user_id,design_id,quantity,size,customer_name,shipping_address,pincode,city,phone_number,email,payment_method,total_price};
//   const data = await dbconnection.addorder(orderData);
//     res.json({ success: true, orderId: result.orderId });

// });


// Update cart item quantity
// router.post("/update-cart", async (req, res) => {
//   const { itemId, newQuantity } = req.body;
//   const item = await CartItem.findById(itemId);
//   if (item) {
//     item.quantity = newQuantity;
//     await item.save();
//     res.json({ price: item.price * newQuantity });
//   } else {
//     res.status(404).send("Item not found");
//   }
// });

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

router.post('/api/update-profile', async (req, res) => {
  const { user_id, first_name, last_name, phone, address, pincode, city, area } = req.body;

  // Validation
  if (!user_id || !first_name || !last_name || !phone || !address || !pincode || !city || !area) {
    return res.status(400).json({ error: 'All fields are required to update profile.' });
  }

  try {
    // Update Users table
    const userResult = await dbconnection.updateUserProfile(user_id, first_name, last_name, phone);

    // Update Addresses table
    const addressResult = await dbconnection.updateAddress(user_id, address, pincode, city, area);

    const userChanged = userResult?.changes > 0;
    const addressChanged = addressResult?.changes > 0;

    if (userChanged || addressChanged) {
      res.status(200).json({ message: 'Profile updated successfully!' });
    } else {
      res.status(200).json({ message: 'No changes made.' });
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Server error while updating profile.' });
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

// router.post('/api/add-to-cart', async (req, res) => {
//   const { user_id, design_id, quantity, size } = req.body;

//   if (!user_id || !design_id || !quantity || !size) {
//       return res.status(400).json({ error: 'All fields (user_id, design_id, quantity, size) are required.' });
//   }
//   if (quantity < 1 || quantity > 100) {
//       return res.status(400).json({ error: 'Quantity must be between 1 and 100.' });
//   }

//   try {
//       const existingItem = await dbconnection.getCartItem(user_id, design_id, size);
//       if (existingItem) {
//           const newQuantity = Math.min(existingItem.quantity + quantity, 100);
//           await dbconnection.updateCartQuantity(user_id, design_id, newQuantity, size);
//           return res.status(200).json({ message: 'Cart quantity updated successfully!' });
//       }
//       await dbconnection.addToCart(user_id, design_id, quantity, size);
//       return res.status(200).json({ message: 'Item added to cart successfully!' });
//   } catch (error) {
//       console.error('Error adding to cart:', error);
//       res.status(500).json({ error: 'Server error while adding to cart.' });
//   }
// });

// // Get cart
// router.get('/api/cart', auth.isAuthenticated, async (req, res) => {
//   try {
//       const user_id = req.session.user_id;
//       const cartItems = await dbconnection.getCart(user_id);
//       res.json(cartItems);
//   } catch (error) {
//       console.error('Error fetching cart:', error);
//       res.status(500).json({ error: 'Server error while fetching cart.' });
//   }
// });
router.delete('/api/delete-design/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await dbconnection.deleteDesignById(id);
    
    if (deleted.deletedCount === 0) {
      return res.status(404).json({ error: 'Design not found' });
    }

    res.json({ message: 'Design deleted successfully' });
  } catch (err) {
    console.error('Delete Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;