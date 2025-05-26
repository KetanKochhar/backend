const express = require('express');
const router = express.Router();
const dbconnectiom = require("..//utils/db")
const auth = require("..//utils/auth")

const functionmap = {"polo":dbconnectiom.getpolocolors , "cotton":dbconnectiom.getcottoncolors , "sports":dbconnectiom.getsportscolors}

router.get("/design",auth.isAuthenticated,async(request , response)=>{
    colors = await functionmap[request.session.type]();
    mail = request.session.email ;
    a = await dbconnectiom.getUserIdByEmail(mail);
    console.log(a)
    b = await dbconnectiom.getDesignsByUserId(a.id)
    num = b[0].num+1;
    if (num>100){
        return response.send("NO MORE DESIGNS FOR YOU !!")
    }
    console.log(a.id)
    response.render("design",{type:request.session.type,colors:colors,name:request.session.user,mail:request.session.email,uid:a.id,number:num+1})
})
router.post("/save-design", async (request, response) => {
    try {
      const { uid, name, type, color, fcj, bcj } = request.body;
  
      if (!uid || !name || !type || !color || !fcj || !bcj) {
        return response.status(400).json({ message: 'Missing required fields' });
      }
  
      const designId = await dbconnectiom.addDesign(uid, name, type, color, fcj, bcj);
  
      response.json({ message: 'Design saved successfully', designId });
    } catch (error) {
      console.error('Error in /save-design:', error.message);
      response.status(500).json({ message: 'Server error' });
    }
  });


router.post("/update-design",async (request,response)=>{
    try{
        const {did , fcj , bcj} = request.body;
        const data = await dbconnectiom.updateDesign(did,fcj,bcj);
        response.json({message:"Design updated sucessfully",data})
    }catch(error){
        console.error("Error while updating the design ",error.message);
        response.status(500).json({message:"Server Error "})
    }
});

module.exports = router;