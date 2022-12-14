import segmentos from "../models/Segmento.js";

class SegmentoController {
    
    static listAllActivity =(req,res)=>{
        segmentos.find((err, segmentos) => {
            res.status(200).json(segmentos)})

    }

    static listAllActivitybyName = (req, res)=>{
        const name = req.query.name;
        segmentos.find({'name': name}, {}, (err, segmentos)=>{
            res.status(200).send(segmentos)
        })
    }

    static listAllActivitybyId =(req,res)=>{
        const id = req.params.id;
        segmentos.findById(id, (err, segmentos)=>{
            if(err){
                res.status(400).send({message: `${err.message} id do segmento não localizado`})
            }else{
                res.status(200).send(segmentos)
            }
        })
    }

    static addActivity = (req,res)=>{
        let segmento = new segmentos(req.body)
        segmento.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} falha ao cadastrar novo segmento`})
            }else{
                res.status(201).send(segmento.toJSON())
            }
        })
    }

    static editActivity = (req, res)=>{
        const id = req.params.id;
        segmentos.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: "Segmento atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteActivity =(req,res)=>{
        const id = req.params.id;
        segmentos.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message:"Livro removido com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default SegmentoController