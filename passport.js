const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const sqlite3 = require('better-sqlite3');
const db = new sqlite3('database/customwear.db');
require("dotenv").config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            const email = profile.emails[0].value;
            const firstName = profile.name.givenName || "";
            const lastName = profile.name.familyName || "";

            // Check if user already exists
            const existingUser = db.prepare("SELECT * FROM Users WHERE email = ?").get(email);

            if (existingUser) {
                return done(null, existingUser); // Already has an ID
            } else {
                const newUser = {
                    google_id: Date.now().toString(), // Use your own generator
                    first_name: firstName,
                    last_name: lastName,
                    dob: null,
                    phone_number: null,
                    email: email,
                    password: "Google_Login",
                    created_at: new Date().toISOString()
                };

                // Insert user
                db.prepare(`INSERT INTO Users (google_id, first_name, last_name, dob, phone_number, email, password, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`)
                    .run(
                        newUser.google_id,
                        newUser.first_name,
                        newUser.last_name,
                        newUser.dob,
                        newUser.phone_number,
                        newUser.email,
                        newUser.password,
                        newUser.created_at
                    );

                // Now fetch the inserted user (with auto-generated ID)
                const insertedUser = db.prepare("SELECT * FROM Users WHERE email = ?").get(email);

                return done(null, insertedUser); // This has `id`
            }
        } catch (err) {
            return done(err, null);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.email); // This must exist!
});

passport.deserializeUser((email, done) => {
    const user = db.prepare("SELECT * FROM Users WHERE id = ?").get(email);
    done(null, user);
});

module.exports = passport;
