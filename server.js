import { startServer } from './lib/serverSetup.js'
import apiRouter from './src/models/api.js'
import indexRouter from './src/models/index.js'

const server = startServer(3000)
server.use(indexRouter)
server.use('/api', apiRouter)