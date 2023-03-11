import express, { json, urlencoded, static as expStatic } from "express"
import config from '../config.json' assert {type: "json"}
import { findPortArgument } from './misc.js'
import dotenv from 'dotenv'

function setConfig() {
    const defaultConfig = []
    if (config.middleware.json) {
        defaultConfig.push({ func: json, opt: {} })
    }
    if (config.middleware['url-encoded'].value) {
        defaultConfig.push({ func: urlencoded, opt: config.middleware['url-encoded'].options })
    }
    return defaultConfig
}

export function startServer(port = 3000, ...midleware) {
    const server = express()
    dotenv.config()
    server.use(expStatic('public'))
    const PORT = findPortArgument() || process.env.PORT || port
    server.listen(PORT)
    console.log("Server started on port " + PORT)
    setConfig().forEach(conf => {
        server.use(conf.func(conf.opt))
    })
    midleware.forEach(func => {
        server.use(func())
    })
    return server
}