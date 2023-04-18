import express, { Router } from 'express'
import { ClientSignup } from '../../../interfaces'
import saveClient from '../../../database/models/Client'
let router= express.Router()


router.post('/signup', (req, res) => {
    let client:ClientSignup = req.body
    saveClient(client).then((client)=>{
        res.send(client)
    })
    .catch((e)=>{
        res.send(e)
    })
    
       
})

module.exports = router