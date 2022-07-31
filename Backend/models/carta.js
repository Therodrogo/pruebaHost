import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cartaSchema = new Schema({
    titulo: {type: String, required: [true, 'Titulo obligatorio']},
    descripcion: {type: String, required: [true, 'Descripcion obligatorio']},
    urlFoto:{type: String},
});

const Carta = mongoose.model('Carta', cartaSchema);

export default Carta;