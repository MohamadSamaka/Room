const express = require('express');
const router = express.Router()
const CategoriesController = require('../controllers/CategoriesController.js')

router.route("/categories")
.get(CategoriesController.GetAllCategories)
.post(CategoriesController.AddCategory)
.put(CategoriesController.UpdateCategory)
.delete(CategoriesController.DeleteCategory)


module.exports = router;
