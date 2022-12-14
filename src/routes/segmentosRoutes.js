import express from 'express'
import SegmentoController from '../controller/segmentosController.js'

const router = express.Router();

router
    .get("/segmentos", SegmentoController.listAllActivity)
    .get("/segmentos/busca", SegmentoController.listAllActivitybyName)
    .get("/segmentos/:id", SegmentoController.listAllActivitybyId)
    .post("/segmentos", SegmentoController.addActivity)
    .put("/segmentos/:id", SegmentoController.editActivity)
    .delete("/segmentos/:id", SegmentoController.deleteActivity)

export default router