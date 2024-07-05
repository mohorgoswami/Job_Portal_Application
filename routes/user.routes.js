const express = require('express');
const router = express.Router();
const {getUserById,updateUserById} = require('../controller/user.controller');



 router.get('/user/:id', getUserById);
 router.put('/update/:id',updateUserById);



module.exports = router;