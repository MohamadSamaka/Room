const express = require('express');
const router = express.Router()
const SubCategoriesController = require('../controllers/SubCategoriesController.js')

router.route("/subCategories")
.get(SubCategoriesController.GetAllCategories)
.post(SubCategoriesController.AddCategory)
.put(SubCategoriesController.UpdateCategory)
.delete(SubCategoriesController.DeleteCategory)


module.exports = router;
