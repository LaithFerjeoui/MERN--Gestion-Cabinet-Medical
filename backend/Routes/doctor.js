import {updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctors} from  "../Controllers/doctorController.js";
import express from 'express';
import { authenticate, restrict} from "../auth/verifyToken.js";

const router = express.Router()

router.get('/:id', getSingleDoctor)
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor)
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor)
router.get('/', getAllDoctors)

export default router;
