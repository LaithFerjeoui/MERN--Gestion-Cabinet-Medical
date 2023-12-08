import {updateUser, deleteUser, getSingleUser, getAllUsers} from  "../Controllers/userController.js";
import express from 'express';

const router = express.Router()

router.get('/:id', getSingleUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/', getAllUsers)

export default router;
