const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const session = require('express-session');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === 'true';

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        secure: process.env.Secure === "true"
    }
}));

// Maintenance page
app.get('/maintenance', (req, res) => {
    res.render('maintenance');
});

// Maintenance mode middleware
app.use((req, res, next) => {
    if (!MAINTENANCE_MODE) return next();

    const allowedPaths = ['/maintenance'];
    const isStaticAsset = req.path.startsWith('/css') || req.path.startsWith('/js') || req.path.startsWith('/images') || req.path.startsWith('/fonts');

    if (allowedPaths.includes(req.path) || isStaticAsset) {
        return next();
    }

    return res.redirect('/maintenance');
});

// Core pages
app.get("/", (req, res) => {
    res.render("home", { user: req.session.user });
});

app.get("/privacy-policy", (req, res) => {
    res.render("privacyPolicy", { user: req.session.user });
});

app.get("/Contact-Us", (req, res) => {
    res.render("contact", { user: req.session.user });
});

app.get("/Refund-And-Cancellation-Policy", (req, res) => {
    res.render("refundAndCancellationPolicy", { user: req.session.user });
});

app.get("/Shipping-And-Delivery-Policy", (req, res) => {
    res.render("shippingAndDeliveryPolicy", { user: req.session.user });
});

app.get("/Terms-And-Conditions", (req, res) => {
    res.render("termsAndConditions", { user: req.session.user });
});

app.get("/thank-you", (req, res) => {
    res.render("thank-you", { user: req.session.user });
});

app.get("/design-your-tshirt", (req, res) => {
    res.render("qr");
});

// Session setter for dynamic use
app.post('/set-session', (req, res) => {
    const { key, value } = req.body;
    req.session[key] = value;
    res.json({ message: 'Session set', session: req.session });
});

// API: Graphics categories
app.get('/api/categories', (req, res) => {
    const dirPath = path.join(__dirname, '/public/images/cloths');
    fs.readdir(dirPath, (err, folders) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }

        const categories = folders.filter(folder => {
            const fullPath = path.join(dirPath, folder);
            return fs.statSync(fullPath).isDirectory();
        });

        res.json(categories);
    });
});

// API: SVGs per category
app.get('/api/graphics/:category', (req, res) => {
    const category = req.params.category;
    const dirPath = path.join(__dirname, '/public/images/cloths', category);
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }

        const svgFiles = files.filter(file => file.endsWith('.svg')).map(file => `images/cloths/${category}/${file}`);
        res.json(svgFiles);
    });
});

// API: Payment route
const paymentRoutes = require('./routes/payment');
app.use('/api/payment', paymentRoutes);

// Feature routes
const loginroutes = require("./routes/login");
const profileroutes = require("./routes/profile");
const addproductroutes = require("./routes/addproduct");
const productorderroutes = require("./routes/productorder");
const myordersroutes = require("./routes/myorders");
const designroutes = require("./routes/design");
const adminroutes = require("./routes/admin");

app.use("/", loginroutes);
app.use("/", profileroutes);
app.use("/", addproductroutes);
app.use("/", productorderroutes);
app.use("/", myordersroutes);
app.use("/", designroutes);
app.use("/admin", adminroutes);

// 404 page
app.use((req, res) => {
    res.status(404).render("nf");
});

// Start server
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
