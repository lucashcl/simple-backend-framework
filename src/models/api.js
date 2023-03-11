import { Router } from "express";
import { debugMiddleware } from "../../lib/misc.js";



const apiRouter = Router()

apiRouter.route('/')
    .get(debugMiddleware)
    .post((req, res) => {
        res.json({
            msg: "post is working",
            data: req.body
        })
    })


export default apiRouter
