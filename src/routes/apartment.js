import express, { Router } from 'express'

const router = Router()

router.post('/apartment', (req, res) => {
    console.log(req.number)

    res.status(200).send({ message: "success!"})
})

export default router