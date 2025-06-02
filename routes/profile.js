const express = require('express');
const auth = require('..//utils/auth');
const dbconnection = require("..//utils/db")

const router = express.Router();

router.get("/profile",auth.isAuthenticated , async(request,response)=>{
    const uid = await dbconnection.getUserByEmail(request.session.email)
    const designs = await dbconnection.getDesignsByUserIdnumber(uid.id)
    console.log(designs.length)
    const id = []
    const name = []
    const type = [] 
    const color = []
    const fcjp = []
    const bcjp = []
    const price = []
    for (let i = 0; i < designs.length; i++) {
        // console.log(designs[i].id)
        id.push(designs[i].id)
        // console.log(designs[i].name)
        name.push(designs[i].name)
        // console.log(designs[i].type)
        type.push(designs[i].type)
        // console.log(designs[i].color)
        color.push(designs[i].color)
        // console.log(JSON.parse(designs[i].front_canvas_json).preview)
        fcjp.push(JSON.parse(designs[i].front_canvas_json).preview)
        // console.log(JSON.parse(designs[i].back_canvas_json).preview)
        bcjp.push(JSON.parse(designs[i].back_canvas_json).preview)
        price.push(designs[i].price)
    }
    response.render("profile",{userid:uid.id,username : request.session.user,id:id, name:name , type:type , color:color , fcjp:fcjp , bcjp:bcjp , price:price})
})

router.get("/cart",auth.isAuthenticated , async(request , response)=>{
    try{
        did = request.session.did
        console.log(did)
        const data = await dbconnection.GetDesignById(did)
        console.log(data[0].price)
        // console.log(data[0].name)
        // console.log(data[0].type)
        // console.log(data[0].color)
        // console.log(JSON.parse(data[0].front_canvas_json).preview)
        price = data[0].price
        id = data[0].id;
        dname = data[0].name;
        type = data[0].type;
        col = data[0].color;
        prev = JSON.parse(data[0].front_canvas_json).preview;
        response.render("cart",{dname:dname,img:prev,price:price})
        // response.send(`cart page comming soon ${id} <br> ${dname} <br> ${type} <br> ${col} <br> ${prev}`)
        // response.send("cart page comming soon",)
    }
    catch (error){
        console.error(error)
        response.sendStatus(500)
    }
  })

  router.post('/api/address', (req, res) => {
    const { user_id, address, pincode, city, area } = req.body;
  const data = dbconnection.addAddress(user_id,address,pincode,city,area);
  res.redirect("/profile")
  })

  router.post("/check-promo", async (request, response) => {
    const { promo } = request.body;
    try {
      const data = await dbconnection.getpromo(promo);
      if (!data || data.length === 0) {
        return response.status(400).json({ error: "Invalid promo code" });
      }
      const discount = data[0].discount;
      request.session.promoApplied = true;
      request.session.discount = discount;
      response.json({ discount }); // send discount as JSON
    } catch (err) {
      console.error(err);
      response.status(500).json({ error: "Server error" });
    }
  });  
module.exports = router;