const path = require('path')

const express = require('express')

const shopRouter = express.Router()

const pathMain = require('../util/path')

const adminData = require('./admin')

shopRouter.get('/',((req,res,next) => {
      // res.sendFile(path.join(__dirname,'../','views','Shop.html'))
      console.log(adminData.products);
      
      // res.sendFile(path.join(pathMain,'views','Shop.html'))
      res.render('shop')
}))

module.exports = shopRouter