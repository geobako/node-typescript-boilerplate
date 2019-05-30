import express, { Application, Request, Response, NextFunction } from 'express'
import compression from 'compression'
import router from './api/routes/index'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'


const app: Application = express()


/*
middlewares
*/
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000
}))


/*
Use Routes
*/
app.use('/', router)



export default app