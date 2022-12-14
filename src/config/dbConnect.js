import mongoose from "mongoose"

mongoose.connect("mongodb+srv://marangoni:HfEA42FxLz6CKZLQ@api-segmentos.3hvl44i.mongodb.net/Saurus-api")


let db = mongoose.connection    

export default db;