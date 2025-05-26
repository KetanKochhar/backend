const express = require('express');
const router = express.Router();
const dbconnection = require("..//utils/db")
const auth = require("..//utils/auth")

router.get("/admin",auth.isAdmin,async(request,response)=>{
    response.render("admin/home");
})

router.get("/admin/color",async(request,response)=>{
    const polocolor = await dbconnection.getpolocolors();
    const cottoncolor = await dbconnection.getcottoncolors();
    const sportscolor = await dbconnection.getsportscolors();
    response.render("admin/color",{polo:polocolor , cotton : cottoncolor , sports : sportscolor})
})
router.post('/add-color', (req, res) => {
  const {forname,name, colorName, darkColor } = req.body;
  console.log(forname , name, colorName, darkColor )
  dbconnection.addColorToDB(forname , name ,colorName, darkColor);
  res.redirect('/admin');
});


module.exports = router;