import express, { Router } from 'express'
import { RiderSignup } from '../../../interfaces'
import saveRider from '../../../database/models/Rider'
let router= express.Router()


router.post('/signup', (req, res) => {
    let rider:RiderSignup = req.body
    saveRider(rider).then((client)=>{
        res.send(client)
    })
    .catch((e)=>{
        res.send(e)
    })
    
       
})

module.exports = router