 const path = require('path')
 
 const express = require('express')

 const router = express.Router()

 const products = []

 const pathMain = require('../util/path')

 router.get('/add-product',(req,res,next) => {
//     res.sendFile(path.join(__dirname,'../','views','Add-Product.html'))
res.sendFile(path.join(pathMain,'views','Add-Product.html'))
})

router.post('/add-product',(req,res,next) => {
      console.log(req.body);
      products.push({title:req.body.title})
      res.redirect('/')
})


 module.exports  = {router,products}