import { Router } from "express";
import setViews from "./views.js";

const indexRouter = Router()
setViews(indexRouter)

export default indexRouter