const express = require("express");
const passport = require("passport");
const router = express.Router();

// Redirect to Google OAuth
router.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

// Google OAuth Callback
router.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/login"
}), (request, response) => {
  const user = request.user;

  if (user) {
    request.session.user = user.email;
    request.session.email = user.email;
    return response.redirect("/");
  } else {
    return response.redirect("/login");
  }
});

module.exports = router;
