const { states, users,country, regions } = require('../models');
const jwt = require('jsonwebtoken')


const getStates = async(req, res) =>{
    try{
        const States = await states.findAll({include: [country,users, regions] })
        return res.status(200).json(States)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}


const getState =async(req, res) =>{
   try{
        const StateId = req.params.id
        const States = await states.findOne({ where:{id : StateId}})
        return res.status(200).json(States)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const addState = async(req, res) =>{
try{
    const body = { name , code, countryId, regionId, userId} = req.body
     const col = await states.create(body);
    return res.status(200).json(col)
}
catch(err){
    return res.status(500).json({ err: err.message })
}
  
   
}

const deleteState = async(req, res) =>{
    try{
       const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const StateId = req.params.id
       const ress = await states.destroy({ where:{id : StateId}})
        return res.status(200).json(ress);    
        
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}

 const updateState = async(req, res) =>{
   try{
        const StateId = req.params.id
        const {name, code, countryId, userId, regionId } = req.body
        const ress = await states.findOne({ where:{id : StateId}})
        ress.name = name
        ress.code= code
        ress.countryId = countryId
        ress.userId = userId
        ress.regionId = regionId
        ress.save()
        return res.status(200).json(ress)
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}
const loadStateswithRegion = async(req, res) =>{
    try{
        const regionId = req.params.regionId
        const state = await states.findAll({where:{regionId: regionId}})
        return res.status(200).json(state)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
module.exports = {
    getStates,
    getState, 
    addState, 
    deleteState, 
    updateState,
    loadStateswithRegion,
    
}