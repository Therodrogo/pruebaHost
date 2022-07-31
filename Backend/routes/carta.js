import express from 'express';
const router = express.Router();

// importar el modelo carta
import Carta from '../models/carta';

// Agregar una carta
router.post('/nueva-carta', async(req, res) => {
  const body = req.body;  
  try {
    const cartaDB = await Carta.create(body);
    res.status(200).json(cartaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

router.get('/carta/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const cartaDB = await Carta.findOne({_id});
    res.json(cartaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los documentos
router.get('/carta', async(req, res) => {
  try {
    const cartaDb = await Carta.find();
    res.json(cartaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete eliminar una carta
router.delete('/carta/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const cartaDb = await Carta.findByIdAndDelete({_id});
    if(!cartaDb){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(cartaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put actualizar una carta
router.put('/carta/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const cartaDb = await Carta.findByIdAndUpdate(_id, body, {new: true});
    res.json(cartaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


module.exports = router;