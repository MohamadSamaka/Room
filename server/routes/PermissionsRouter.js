const express = require('express');
const router = express.Router();
const PermissionsController = require('../controllers/PermissionsController.js');

router.route("/permissions")
.get(PermissionsController.GetAllPermissions)
.post(PermissionsController.AddPermission)
.put(PermissionsController.UpdatePermission)
.delete(PermissionsController.DeletePermission)

module.exports = router;
