const express = require('express');
const router = express.Router();
const dbconnection = require("..//utils/db")
const auth = require("..//utils/auth")

router.get("/admin", auth.isAdmin, async (request, response) => {
  try {
    const totalOrders = await dbconnection.getTotalOrders();
    const totalUsers = await dbconnection.getTotalUsers();
    const totalRevenue = await dbconnection.getTotalRevenue();


    response.render("admin/home", {
      totalOrders: totalOrders,
      users: totalUsers,
      revenue: totalRevenue.toFixed(2)
    });
  } catch (error) {
    console.error("Error loading admin panel:", error);
    response.status(500).send("Internal Server Error");
  }
});

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


router.get('/admin/order', auth.isAdmin, async (req, res) => {
  try {
    const orders = await dbconnection.getAllOrders();

    const enrichedOrders = orders.map(order => {
      let frontPreview = null;
      let frontsizeLabels = [];
      let frontimages = [];
      let usedfrontgraphics = [];
      let frontObjectCount = 0;

      let backPreview = null;
      let backsizeLabels = [];
      let backimages = [];
      let usedbackgraphics = [];
      let backObjectCount = 0;

      
      try {
        const front = JSON.parse(order.front_canvas_json || '{}');
        frontPreview = front?.preview || null;
        frontimages = front?.json?.objects || [];
        frontObjectCount = frontimages.length;
        
        frontimages.forEach(obj => {
          if (obj.type === 'image' && obj.src) {
            usedfrontgraphics.push(obj.src);
          }
          if (obj.type === 'sizeLabel' && obj.text) {
            frontsizeLabels.push(obj.text);
          }
        });
      } catch (err) {
        console.error(`Failed to parse front_canvas_json for order ${order.id}`);
      }
      
      try {
        const back = JSON.parse(order.back_canvas_json || '{}');
        backPreview = back?.preview || null;
        backimages = back?.json?.objects || [];
        backObjectCount = backimages.length;

        backimages.forEach(obj => {
          if (obj.type === 'image' && obj.src) {
            usedbackgraphics.push(obj.src);
          }
          if (obj.type === 'sizeLabel' && obj.text) {
            backsizeLabels.push(obj.text);
          }
        });
      } catch (err) {
        console.error(`Failed to parse back_canvas_json for order ${order.id}`);
      }
      return {
        ...order,
        frontPreview,
        frontimages,
        frontObjectCount,
        usedfrontgraphics,
        frontsizeLabels,

        backPreview,
        backimages,
        backObjectCount,
        usedbackgraphics,
        backsizeLabels,
      };
    });

    res.render('admin/order', { orders: enrichedOrders });

  } catch (err) {
    console.error("Failed to fetch orders:", err);
    res.status(500).send("Server error");
  }
});


module.exports = router;