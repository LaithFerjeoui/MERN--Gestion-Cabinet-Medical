import {updateUser, deleteUser, getSingleUser, getAllUsers} from  "../Controllers/userController.js";
import express from 'express';
import { authenticate, restrict} from "../auth/verifyToken.js";

const router = express.Router()

router.get('/:id', authenticate, restrict(['patient']), getSingleUser);
router.put('/:id', authenticate, restrict(['patient']), updateUser);
router.delete('/:id', authenticate, restrict(['patient']), deleteUser);
router.get('/', getAllUsers);
//router.get('/', authenticate, restrict(['admin']), getAllUsers);
export default router;
