const router = require('express').Router();
const AdminController = require('../Controllers/AdminController');
const authpage = require('../Middlewares/authpage');

router.put('/changeRole/:id', authpage('admin'), AdminController.changeRole);
router.get('/getalluser/:id', authpage('admin'), AdminController.getalluser);
router.delete('/deleteAlluser', authpage('admin'), AdminController.deleteAlluser);

module.exports = router;
