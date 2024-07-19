import { Router } from 'express';
import { getUsers, getUser, login } from '../controllers/userController'

const router = Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/login', login);

export default router;