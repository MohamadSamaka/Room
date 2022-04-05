const express = require('express');
const router = express.Router()
const SubCategoriesController = require('../controllers/SubCategoriesController.js')

router.route("/subCategories")
.get(SubCategoriesController.GetAllSubCategories)
.post(SubCategoriesController.AddSubCategory)
.put(SubCategoriesController.UpdateSubCategory)
.delete(SubCategoriesController.DeleteSubCategory)


module.exports = router;
