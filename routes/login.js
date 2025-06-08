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

async function sendmail(Email, otp, firstname, lastname) {
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
          <p>Hi ${firstname} ${lastname},</p>
          <p>Use the OTP below to complete your verification. This code is valid for the next 10 minutes.</p>
          <div class="otp-box">${otp}</div>
          <p>If you didn’t request this, please ignore this email or contact us immediately.</p>
          <p>Thank you,<br>Team Custom Wear</p>
          <div class="footer">
              📧 team@customwear.com<br>
              📍 <a href="https://customwear.co.in" style="color: #888; cusrsor: pointer">customwear.co.in</a><br>
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

router.post("/signup", async (request, response) => {
    const { firstname, lastname, dob, phno, mail, pass } = request.body;

    try {
        const hashedPass = await bcrypt.hash(pass, 10);
        const newUserId = await dbconnection.addUser(firstname, lastname, dob, phno, mail, pass);
        const otp = generateOTP();
        console.log("Generated otp :", otp)

        await dbconnection.saveOTPToDatabase(newUserId, otp);
        await sendmail(mail, otp, firstname, lastname);

        request.session.tempUserId = newUserId;
        request.session.tempUserEmail = mail;
        request.session.tempUserName = firstname;

        response.redirect("/otp");

    } catch (error) {
        console.error("Signup Error:", error.message);
        return response.render("signup", {
            error: error.message,
            user: request.session.user,
            formData: { firstname, lastname, dob, phno, mail }
        });
    }
});

// ---------------- OTP ----------------
router.get("/otp", (request, response) => {
    if (request.session.tempUserId) {
        return response.render("otp", { error: null, mail: request.session.tempUserEmail, user: request.session.user });
    }
    response.redirect("/login");
});

router.post("/otp", async (request, response) => {
    const { otp } = request.body;
    const enteredOTP = Array.isArray(otp) ? otp.join("") : otp;
    const userId = request.session.tempUserId;

    try {
        const saved = await dbconnection.getOTPFromDatabase(userId);

        if (saved.otp_code === enteredOTP) {
            delete request.session.tempUserId;
            delete request.session.tempUserEmail;
            delete request.session.tempUserName;
            return response.redirect("/login"); // Not logged in yet
        }

        response.render("otp", { error: true, user: request.session.user, mail: request.session.tempUserEmail });
    } catch (err) {
        console.error("OTP Error:", err);
        response.render("otp", { error: true, user: request.session.user, mail: request.session.tempUserEmail });
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
    console.log(user)
    if (user) {
        const isPasswordMatch = await dbconnection.comparePassword(password, user.password);
        console.log(user.password+'hii')
        console.log(password)
        if (isPasswordMatch) {
            request.session.user = user.first_name + user.last_name;
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
