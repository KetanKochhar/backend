const express = require('express');
const router = express.Router();
const dbconnection = require("..//utils/db")
const auth = require("..//utils/auth")

router.get("/admin", auth.isAdmin, async (request, response) => {
  response.render("admin/home");
})

router.get("/admin/color", auth.isAdmin, async (request, response) => {
  const polocolor = await dbconnection.getpolocolors();
  const cottoncolor = await dbconnection.getcottoncolors();
  const sportscolor = await dbconnection.getsportscolors();
  response.render("admin/color", { polo: polocolor, cotton: cottoncolor, sports: sportscolor })
})

router.get("/admin/promo", auth.isAdmin, async (request, response) => {
  promo = await dbconnection.getallpromo();
  response.render("admin/promo", { promo: promo })
})

router.post('/add-color', (req, res) => {
  const { forname, name, colorName, darkColor } = req.body;
  console.log(forname, name, colorName, darkColor)
  dbconnection.addColorToDB(forname, name, colorName, darkColor);
  res.redirect('/admin');
});
router.post("/add-promo", (request, response) => {
  const { code, dis, uses } = request.body;
  dbconnection.addpromo(code, dis, uses);
  response.redirect("/admin")
})

module.exports = router;