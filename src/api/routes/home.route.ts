import express from 'express'
import {
    visitHomePage
} from '../controllers/home.controller'

const homeRouter = express.Router();

/**
 * Get all requests
 * @private
 */
homeRouter.get('/', visitHomePage)



export default homeRouter