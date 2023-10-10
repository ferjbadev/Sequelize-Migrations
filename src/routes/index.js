const { Router } = require('express');
const router = Router();   

const { getUsers, createUser, updateUser, deleteUser, getUserByID } = require('../controllers/index.controllers');

router.get('/users', getUsers);
router.get('users/:id', getUserByID)
router.post('/users', createUser);
router.put('/users', updateUser);
router.delete('/users/:id', deleteUser);


module.exports = router;