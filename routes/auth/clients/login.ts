import express, { Router } from 'express'
import { ClientSignup } from '../../../interfaces'
import login from '../../../actions/auth/login'
let router= express.Router()


router.post('/login', async(req, res) => {
    let client = req.body
    let result= await login(client)
 
    res.send(result)

   
    
       
})

module.exports = router