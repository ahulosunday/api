const { lga, users,country, regions,states } = require('../models');
const jwt = require('jsonwebtoken')


const getLgas = async(req, res) =>{
    try{
        const Lga = await lga.findAll({include: [country,users, regions, states], orderby:{'stateId': 'DESC'} })
        return res.status(200).json(Lga)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}


const getLga =async(req, res) =>{
   try{
        const LgaId = req.params.id
        const Lga = await lga.findOne({ where:{id : LgaId}})
        return res.status(200).json(Lga)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}

const addLga = async(req, res) =>{
try{
    const body = { name , code, countryId, regionId, stateId, userId} = req.body
     const col = await lga.create(body);
    return res.status(200).json(col)
}
catch(error){
    return res.status(500).json({ error: error.message })
}
  
   
}

const deleteLga = async(req, res) =>{
    try{
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const LgaId = req.params.id
        const ress = await lga.destroy({ where:{id : LgaId}})
        return res.status(200).json(ress);    
        
    }
    catch(error){
        return res.status(200).json(error.message)
    }
}

 const updateLga = async(req, res) =>{
   try{
        const LgaId = req.params.id
        const {name, code, countryId, userId, stateId, regionId } = req.body
        const ress = await lga.findOne({ where:{id : LgaId}})
        ress.name = name
        ress.code= code
        ress.countryId = countryId
        ress.userId = userId
        ress.stateId = stateId
        ress.regionId = regionId
        ress.save()
        return res.status(200).json(ress)
    }
    catch(error){
        return res.status(200).json(error.message)
    }
}
const loadLgaswithState = async(req, res) =>{
    try{
        const stateId = req.params.stateId
        const state = await lga.findAll({where:{stateId: stateId}})
        return res.status(200).json(state)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}

module.exports = {
    loadLgaswithState,
    getLga,
    getLgas, 
    addLga, 
    deleteLga, 
    updateLga,
    
}