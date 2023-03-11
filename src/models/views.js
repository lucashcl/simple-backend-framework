import { getRootPath } from "../../lib/misc.js";
import { readdirSync } from 'fs'

const viewPath = getRootPath + "/src/views/"

function removeExtension(file) {
    return file.split('.')[0]
}

function setViews(Router) {
    Router.get('/', (req, res) => {
        res.sendFile(viewPath + "index.html")
    })

    readdirSync(viewPath).forEach(view => {
        Router.get('/' + removeExtension(view), (req, res) => {
            res.sendFile(viewPath + view)
        })
    })
}

export default setViews