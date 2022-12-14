import express from 'express'
import app from '../app.js'
import segmentos from './segmentosRoutes.js'

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({name:'api-segmentos'})
    }
)

    app.use(
        express.json(),
        segmentos
    )
    }
export default routes