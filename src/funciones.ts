﻿import { Router, Request, Response } from 'express';
const router = Router();
router.route()
    .get(async (req: Request, res: Response) => {
       console.log('hola mi ammm')
    });
export default router;