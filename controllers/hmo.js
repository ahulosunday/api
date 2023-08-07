const { hmo, users } = require('../models');
const jwt = require('jsonwebtoken')


const getHmos = async(req, res) =>{
    try{
        const Hmos = await hmo.findAll({ include: [users]})
        return res.status(200).json(Hmos)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}


const getHmo =async(req, res) =>{
   try{
        const HmoId = req.params.id
        const Hmos = await hmo.findOne({ where:{id : HmoId}})
        return res.status(200).json(Hmos)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const addHmo = async(req, res) =>{
try{
    
     const col = await hmo.create({ name: req.body.name , code: req.body.code,userId: req.body.userId});
    return res.status(200).json(col)
}
catch(err){
    return res.status(500).json({ err: err.message })
}
  
   
}

const deleteHmo = async(req, res) =>{
    try{
       
        const HmoId = req.params.id
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        
        const ress = await hmo.destroy({ where:{id : HmoId}})
        return res.status(200).json(ress);    
        
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}

 const updateHmo = async(req, res) =>{
   try{
        const HmoId = req.params.id
        const {name, code, userId } = req.body
        const ress = await hmo.findOne({ where:{id : HmoId}})
        ress.name = name
        ress.code= code
        ress.userId = userId
        ress.save()
        return res.status(200).json(ress)
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}

module.exports = {
    getHmos,
    getHmo, 
    addHmo, 
    deleteHmo, 
    updateHmo,
    
}