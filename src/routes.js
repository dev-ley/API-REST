import { Router } from "express";
import SelecaoControllers from "./app/controllers/SelecaoControllers.js";

const router = Router()

// ROTAS
router.get('/selecoes', SelecaoControllers.index)
router.get('/selecoes/:id', SelecaoControllers.show)
router.post('/selecoes', SelecaoControllers.store)
router.put('/selecoes/:id', SelecaoControllers.update)
router.delete('/selecoes/:id', SelecaoControllers.delete)

export default router