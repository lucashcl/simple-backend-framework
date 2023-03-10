import config from '../config.json' assert {type: "json"}
import { json, urlencoded } from 'express'

function setConfig(){
    const defaultConfig = []
    if(config.middleware.json){
        defaultConfig.push({func: json, opt: {}})
    }
    if(config.middleware['url-encoded'].value){
        defaultConfig.push({func: urlencoded, opt: config.middleware['url-encoded'].options})
    }
    return defaultConfig
}


function findPortArgument(){
    const index = process.argv.indexOf('--port')
    const portNumber =  process.argv[index+1]
    if(portNumber){
        return portNumber
    }
    else {
        console.log("port number is missing");
        throw customError.name
    }
}

export function startServer(server, ...midleware){
    const PORT = findPortArgument() || process.env.PORT
    server.listen(PORT)
    console.log("Server started on port " + PORT)
    setConfig().forEach(conf => {
        server.use(conf.func(conf.opt))
    })
    midleware.forEach(func => {
        server.use(func())
    })

}