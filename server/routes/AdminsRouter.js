const express = require('express');
const router = express.Router()
const AdminsController = require('../controllers/AdminsController.js')

router.route("/admins")
.get(AdminsController.GetAllAdmins)
.post(AdminsController.AddAdmin)
.put(AdminsController.UpdateAdmin)
.delete(AdminsController.DeleteAdmin)


module.exports = router;
