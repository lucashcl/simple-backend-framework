import { Router } from "express";

const apiRouter = Router()

apiRouter.route('/')
    .get((req, res) => {
        res.json({msg: "api is working"})
    })
    .post((req, res) => {
        res.json({
            msg: "post is working",
            data: req.body
        })
    })


export default apiRouter
