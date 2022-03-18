const express = require('express');
const router = express.Router()
const ProductsController = require('../controllers/ProductsController.js')
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        if(file.fieldname == "pc-product-images")
            cb(null, "images/pc-products")
        if(file.fieldname == "mobile-product-images")
            cb(null, "images/mobile-products")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})


router.route("/products")
.get(ProductsController.GetAllProducts)
.post(upload.fields([{name: "pc-product-images", maxCount: 5}, {name: "mobile-product-images", maxCount: 5}]), ProductsController.AddProduct)
.put(upload.fields([{name: "pc-product-images", maxCount: 5}, {name: "mobile-product-images", maxCount: 5}]), ProductsController.UpdateProduct)
.delete(ProductsController.DeleteProduct)

module.exports = router;
