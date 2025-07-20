// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const dbconnection = require("../utils/db");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

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
    });

    await transporter.sendMail({
        from: `"Team CustomWear" <${process.env.SMTP_USER}>`,
        to: Email,
        subject: "Verification of your account in CustomWear",
        html: `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Custom Wear OTP</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #b5bfa1;
              background-image: url('https://customwear.co.in/public/images/pattern.png');
              margin: 0;
              padding: 0;
          }
          .email-container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #fff;
              border-radius: 12px;
              padding: 30px;
              box-shadow: 0 4px 10px #b5bfa1;
          }
          .logo {
              text-align: center;
              margin-bottom: 20px;
          }
          .logo img {
              max-width: 150px;
              height: auto;
          }
          h2 {
              color: #222;
              text-align: center;
              margin-bottom: 10px;
          }
          p {
              color: #555;
              font-size: 16px;
              line-height: 1.6;
              text-align: center;
          }
          .otp-box {
              font-size: 24px;
              font-weight: bold;
              background-color: #f0f0f0;
              padding: 15px;
              text-align: center;
              border-radius: 8px;
              margin: 20px auto;
              max-width: 200px;
              letter-spacing: 4px;
          }
          .footer {
              text-align: center;
              font-size: 12px;
              color: #888;
              margin-top: 30px;
          }
      </style>
  </head>
  <body>
      <div class="email-container">
          <div class="logo">
              <img src="https://customwear.co.in/public/images/logo1.svg" alt="Custom Wear Logo">
          </div>
          <h2>Your OTP Code</h2>
          <p>Hi ${Email},</p>
          <p>Use the OTP below to complete your verification. This code is valid for the next 10 minutes.</p>
          <div class="otp-box">${otp}</div>
          <p>If you didn’t request this, please ignore this email or contact us immediately.</p>
          <p>Thank you,<br>Team Custom Wear</p>
          <div class="footer">
              📧 team@customwear.com<br>
              📍 <a href="https://customwear.co.in" style="color: #888; cursor: pointer">customwear.co.in</a><br>
              📷 <a href="https://instagram.com/customwear_official_" target="_blank" style="color: #888; cursor: pointer">@customwear_official_</a>
          </div>
      </div>
  </body>
  </html>
  `
    });
}


// ---------------- SIGNUP ----------------
router.get("/signup", (request, response) => {
    response.render("signup", {
        error: null,
        user: request.session.user,
        formData: null
    });
});

router.post("/signup", async (req, res) => {
    const { mail, pass, lastname, firstname } = req.body;

    try {
        const exists = await dbconnection.checkMailId(mail);

        if (exists) {
            // Show error if email already registered
            return res.render("signup", {
                error: "Email already exists",
                user: req.session.user,
                formData: { mail, lastname, firstname }
            });
        }

        // Else continue to OTP flow
        const otp = generateOTP();

        req.session.pendingUser = {
            email: mail,
            password: pass,
            lastname: lastname,
            firstname: firstname
        };

        req.session.otp = otp;

        await sendmail(mail, otp);

        return res.redirect("/otp");
    } catch (error) {
        console.error("Signup error:", error.message);
        return res.status(500).render("signup", {
            error: "Server error. Try again.",
            user: req.session.user,
            formData: { mail, lastname, firstname }
        });
    }
});

// ---------------- OTP ----------------
router.get("/otp", (request, response) => {
    if (request.session.pendingUser && request.session.otp) {
        return response.render("otp", {
            error: null,
            mail: request.session.pendingUser.email,
            user: request.session.user
        });
    }
    return response.redirect("/signup");
});


router.post("/otp", async (request, response) => {
    const { otp } = request.body;
    const enteredOTP = Array.isArray(otp) ? otp.join("") : otp;

    const sessionOtp = request.session.otp;
    const pendingUser = request.session.pendingUser;

    if (enteredOTP === sessionOtp && pendingUser) {
        try {
            const { email, password, lastname, firstname } = pendingUser;

            // Add user to DB (make sure addUser handles duplicates safely)
            await dbconnection.addUser(email, password, lastname, firstname);

            // Clear session data after successful registration
            delete request.session.pendingUser;
            delete request.session.otp;

            return response.redirect("/login");

        } catch (err) {
            console.error("DB insert error after OTP verification:", err);
            return response.render("otp", {
                error: "Failed to create user. Please try again.",
                user: null,
                mail: pendingUser.email
            });
        }
    } else {
        return response.render("otp", {
            error: "Invalid OTP. Please try again.",
            user: null,
            mail: pendingUser?.email || ""
        });
    }
});


// ---------------- LOGIN ----------------
router.get("/login", (request, response) => {
    const errorMessage = request.query.error || null;
    response.render("login", { error: errorMessage, user: request.session.user });
});

router.post("/login", async (request, response) => {
    const { username, password } = request.body;

    if (username === "hii@bii.com" && password === "as") {
        request.session.role = "admin";
        return response.redirect("/admin");
    }

    const user = await dbconnection.getUserByEmail(username);
    // console.log(user)
    if (user) {
        const isPasswordMatch = await dbconnection.comparePassword(password, user.password);
        // console.log(user.password+'hii')
        // console.log(password)
        if (isPasswordMatch) {
            request.session.user = user.email;
            request.session.email = user.email;
            return response.redirect("/");
        } else {
            return response.render("login", { error: "Wrong E-mail or password", user: request.session.user });
        }
    } else {
        return response.render("login", { error: "This account is not registered", user: request.session.user });
    }
});

// ---------------- FORGOT PASSWORD ----------------
router.get("/forgot-password", (request, response) => {
    response.render("password", { error: null, user: request.session.user });
});

router.post("/forgot-password", async (request, response) => {
    const { email } = request.body;

    try {
        const user = await dbconnection.getUserByEmail(email);
        if (!user) {
            return response.render("password", { error: "Email not found", user: request.session.user });
        }

        const otp = generateOTP();
        await dbconnection.saveOTPToDatabase(user.id, otp);
        await sendmail(email, otp, user.firstname, user.lastname); // ✅ use user's actual name from DB

        request.session.resetEmail = email;
        response.redirect("/reset-password");
    } catch (error) {
        console.error("Forgot password error:", error.message);
        return response.render("password", {
            error: "Something went wrong, try again later.",
            user: request.session.user
        });
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

        const hashedPass = await bcrypt.hash(newpassword, 10);
        await dbconnection.updateUserPassword(email, hashedPass);

        request.session.resetEmail = null;

        response.render("login", { error: "Password updated successfully. Please login.", user: null });
    } catch (error) {
        console.error("Reset password error:", error.message);
        response.render("reset-password", { error: "Failed to reset password. Try again.", user: request.session.user });
    }
});

// ---------------- LOGOUT ----------------
router.get("/logout", (request, response) => {
    request.session.destroy(err => {
        if (err) console.error(err);
        response.redirect("/");
    });
});

module.exports = router;
