const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const session = require("express-session");

const app = express();

dotenv.config();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({limit:"1024mb"}));
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

app.post('/set-session', (req, res) => {
    const { key, value } = req.body;
    req.session[key] = value;
    res.json({ message: 'Session set', session: req.session });
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

app.listen(port, () => {
    console.log(`App is running on the 127.0.0.1:${port}`);
})