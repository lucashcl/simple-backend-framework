import express from 'express'
import { startServer } from './src/bootstrap.js'
import apiRouter from './src/models/api/index.js'

const server = express()
startServer(server)

server.use('/api', apiRouter)