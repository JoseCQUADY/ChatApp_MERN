import express from 'express';
import protectRoutes from '../middleware/protectRoutes.js';
import { getSidebarUsers,addUser, deleteUser} from '../controllers/users.controller.js';

const router = express.Router();

router.get('/',protectRoutes,getSidebarUsers);
router.post('/add/:id',protectRoutes,addUser);
router.post('/delete/:id',protectRoutes,deleteUser);

export default router;