import mongoose from "mongoose";

const segmentoSchema = new mongoose.Schema(
    {
        id:{type: String},
        name:{type: String, required: true}
    }
);

const segmentos = mongoose.model('segmentos', segmentoSchema)

export default segmentos