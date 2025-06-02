const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const dbconnection = require("../utils/db");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config()

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

async function sendmail(Email, otp) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        from: `"Team CustomWear" <${process.env.SMTP_USER}>`,
        to: Email,
        subject: "Verification of your account in custom wear",
        html: `<h1>here is you OTP for the verification of your account in custonwear </h1> <h2>OTP : ${otp}</h2><h4>This OTP will expire in 10 minutes</h4><h3>Also Follow us on instagram </h3><a href="instagram.com/instagram" target = "_blank">instagram </a>`
    })
}

router.get("/login", (request, response) => {
    errorMessage = request.query.error || null;
    response.render("login", { error: errorMessage, user: request.session.user });
})

router.post("/login", async (request, response) => {
    const { username, password } = request.body;
    // console.log(username,password);
    if (username == process.env.ADMIN_MAIL) {
        console.log("admin Logged in ");
        if (password == process.env.ADMIN_PASS) {
            request.session.role = "admin"
            return response.redirect("/admin")
        }
    }
    const user = await dbconnection.getUserByEmail(username);
    if (user) {
        const isPasswordMatch = await dbconnection.comparePassword(password, user.password)
        if (isPasswordMatch) {
            request.session.user = user.first_name + user.last_name;
            request.session.email = user.email;
            response.redirect("/");
        }
        else {
            response.render("login", { error: "Wrong E-mail or password", user: request.session.user });
        }
    }
    else {
        response.render("login", { error: "i think this account is not registered ", user: request.session.user });
    }
})

router.get("/signup", (request, response) => {
    response.render("signup", { error: null, user: request.session.user })
})

router.post("/signup", async (request, response) => {
    const { firstname, lastname, dob, phno, mail, pass } = request.body;

    try {
        const res = await dbconnection.addUser(firstname, lastname, dob, phno, mail, pass);

        const otp = generateOTP();
        console.log("Generated OTP:", otp);

        await dbconnection.saveOTPToDatabase(res, otp);
        await sendmail(mail, otp);

        request.session.tempuser = res;
        request.session.mail = mail;
        request.session.tempusername = firstname;

        response.redirect("/otp");
    } catch (error) {
        console.error("Signup Error:", error.message);
        // Re-render signup page with error message and pre-filled form fields (optional)
        return response.render("signup", {
            error: error.message,
            user: request.session.user,
            formData: { firstname, lastname, dob, phno, mail }
        });
    }
});


router.get("/otp", (request, response) => {
    if (request.session.tempuser) {
        console.log(request.session.mail)
        return response.render("otp", { error: null, mail: request.session.mail, user: request.session.user });
    }
    response.redirect("/");
})

router.post("/otp", async (request, response) => {
    const { otp } = request.body;
    console.log(otp.join(""));
    res = await dbconnection.getOTPFromDatabase(request.session.tempuser);
    if (res.otp_code == otp.join("")) {
        request.session.tempuser = null;
        request.session.user = request.session.tempusername;
        request.session.tempusername = null;
        response.redirect("/");
    }
    else {
        response.render("otp", { error: true, user: request.session.user })
    }
})

router.get("/forgot-password", async (request, response) => {
    response.render("password.ejs", { error: null, user: request.session.user })
})

router.post("/forgot-password", async (request, response) => {
    const { email } = request.body;
    try {
        const user = await dbconnection.getUserByEmail(email);
        if (!user) {
            return response.render("password", { error: "Email not found", user: request.session.user });
        }

        const otp = generateOTP();
        await dbconnection.saveOTPToDatabase(user.id, otp);
        await sendmail(email, otp);

        // Store email and step progress in session
        request.session.resetEmail = email;
        console.log(otp)
        response.redirect("/reset-password");
    } catch (error) {
        console.error("Forgot password error:", error.message);
        return response.render("password", { error: "Something went wrong, try again later.", user: request.session.user });
    }
});


router.get("/reset-password", (request, response) => {
    if (!request.session.resetEmail) {
        return response.redirect("/forgot-password");
    }
    response.render("reset-password", { error: null, user: request.session.user });
});

router.post("/reset-password", async (request, response) => {
    const { otp, newpassword } = request.body;
    const email = request.session.resetEmail;

    try {
        const user = await dbconnection.getUserByEmail(email);
        const savedOtp = await dbconnection.getOTPFromDatabase(user.id);

        if (savedOtp.otp_code !== otp) {
            return response.render("reset-password", { error: "Invalid OTP", user: request.session.user });
        }

        await dbconnection.updateUserPassword(email, newpassword);

        // Clear session
        request.session.resetEmail = null;

        response.render("login", { error: "passwords updated successfully please login again", user: request.session.user });
    } catch (error) {
        console.error("Reset password error:", error.message);
        response.render("reset-password", { error: "Failed to reset password. Try again.", user: request.session.user });
    }
});


router.get("/logout", (request, response) => {
    console.log(request.session)
    request.session.destroy(function (err) {
        if (err) {
            console.error(err);
        }
    });
    console.log(request.session)
    response.redirect("/");
})

module.exports = router;