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
    }
    response.render("profile",{username : request.session.user,id:id, name:name , type:type , color:color , fcjp:fcjp , bcjp:bcjp})
})

module.exports = router;