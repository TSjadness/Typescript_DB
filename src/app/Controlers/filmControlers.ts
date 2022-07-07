import { Request, Response ,Router } from "express";
import * as service from "../Services/filmService"

const router = Router ();

router.get('/', (req: Request, res: Response) => {
   service.getAll().then((Films) => {
    res.send(Films);
   });
});

export default router;