import express from 'express'

/*
import routes
*/
import homeRoute from './home.route'



/*
initialize router
*/
const router = express.Router();


/*
use routes
*/
router.use('/', homeRoute)



export default router