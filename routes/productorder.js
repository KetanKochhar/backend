const express = require('express');
const router = express.Router();
const dbconnection = require('../utils/db'); // Adjust path if needed

router.get('/porder-now/:id', async (req, res) => {
    const user = req.session.user;

    if (!user) {
        return res.redirect('/login');
    }
    
    try {
        const productId = req.params.id;
        
        const product = await dbconnection.getProductById(productId); // Returns one product
        const user = await dbconnection.getUserByEmail(req.session.email);
        const address = await dbconnection.GetAddress(user.id);
        
        if (!product) {
            return res.status(404).send("Product not found");
        }
        
        // 🛑 If address not found, redirect back with toast flag
        if (!user.name || !user.phone_number || !address || !address.address || !address.pincode) {
            return res.render('productorder', {
                user: user,
                product: product,
                address: address,
                showShippingToast: true
            });
        }
        res.render("productorder", {
            user: user,
            product: product,
            address: address,
            showShippingToast: false
        });
    } catch (err) {
        console.error("Error loading order page:", err);
        res.status(500).send("Internal Server Error");
    }
});


// POST: Confirm Shop Product Order
router.post('/pconfirm-order', async (req, res) => {
    try {
        const {
            user_id,
            product_id,
            quantity,
            size,
            customer_name,
            phone_number,
            email,
            shipping_address,
            city,
            pincode,
            payment_method,
            total_price
        } = req.body;

        // Fetch product snapshot
        const product = await dbconnection.getProductById(product_id);
        if (!product) {
            return res.status(404).json({ success: false, error: "Product not found" });
        }

        // Prepare data to insert into ShopOrders
        const orderData = {
            product_id,
            product_name: product.name,
            product_image: product.image,
            material: product.material,
            gender: product.gender,
            user_id,
            customer_name,
            phone_number,
            email,
            shipping_address,
            pincode,
            city,
            quantity,
            size,
            price: product.price,
            actual_price: product.actual_price,
            discount: product.discount,
            total_price,
            payment_method
        };

        // Insert order
        const result = dbconnection.insertShopOrder(orderData);

        res.json({ success: true, orderId: result.lastInsertRowid });
    } catch (error) {
        console.error("Insert Shop Order Error:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});



module.exports = router;
