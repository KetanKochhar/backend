const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require("fs")
const session = require("express-session");

const app = express();

dotenv.config();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "1024mb" }));
app.use(express.urlencoded({ extended: true }));


//creating the sessiona and haldling the sesion for 1day jab tak login rahega user ke pc mein uska account
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));

app.get("/", (request, response) => {
    console.log(request.path);
    response.render("home", { user: request.session.user });
});


app.get("/privacy-policy", (request, response) => {
    console.log(request.path);
    response.render("privacyPolicy", { user: request.session.user });
});

app.get("/Contact-Us", (request, response) => {
    console.log(request.path);
    response.render("contact", { user: request.session.user });
});

app.get("/Refund-And-Cancellation-Policy", (request, response) => {
    console.log(request.path);
    response.render("refundAndCancellationPolicy", { user: request.session.user });
});

app.get("/Shipping-And-Delivery-Policy", (request, response) => {
    console.log(request.path);
    response.render("shippingAndDeliveryPolicy", { user: request.session.user });
});

app.get("/Terms-And-Conditions", (request, response) => {
    console.log(request.path);
    response.render("termsAndConditions", { user: request.session.user });
});

app.get("/order", (request, response) => {
    console.log(request.path);
    response.render("order", { user: request.session.user });
});

app.get("/thank-you", (request, response) => {
    console.log(request.path);
    response.render("thank-you", { user: request.session.user });
});

app.post('/set-session', (req, res) => {
    const { key, value } = req.body;
    req.session[key] = value;
    res.json({ message: 'Session set', session: req.session });
});

// api for graphics
app.get('/api/categories', (req, res) => {
    const dirPath = path.join(__dirname, '/public/images/cloths');
    fs.readdir(dirPath, (err, folders) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }

        // Filter out non-directory items
        const categories = folders.filter(folder => {
            const fullPath = path.join(dirPath, folder);
            return fs.statSync(fullPath).isDirectory();
        });
        // console.log(categories)
        res.json(categories);
    });
});

// Endpoint to get SVG files for a specific category
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

//routes ka use kar raha hoon from dirrent files 
const loginroutes = require("./routes/login");
const profileroutes = require("./routes/profile")
const designroutes = require("./routes/design")
const adminroutes = require("./routes/admin")

//sare routes ko call kar raha hoon phele import kia tha 
app.use("/", loginroutes);
app.use("/", profileroutes);
app.use("/", designroutes);
app.use("/", adminroutes);


app.use((req, res, next) => {
  res.status(404).render("nf");
});

app.listen(port, () => {
    console.log(`App is running on the 127.0.0.1:${port}`);
})