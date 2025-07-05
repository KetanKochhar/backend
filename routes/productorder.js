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

        res.render("productorder", {
            user: user,
            product: product,
            address: address
        });
    } catch (err) {
        console.error("Error loading order page:", err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
