const { regions, users,country } = require('../models');
const jwt = require('jsonwebtoken')


const getRegions = async(req, res) =>{
    try{
        const Regions = await regions.findAll({include: [country,users] })
        return res.status(200).json(Regions)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const loadRegions = async(req, res) =>{
    try{
        const countryId = req.params.countryId
        const Regions = await regions.findAll({where:{countryId: countryId}})
        return res.status(200).json(Regions)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}


const getRegion =async(req, res) =>{
   try{
        const RegionId = req.params.id
        const Regions = await regions.findOne({ where:{id : RegionId}})
        return res.status(200).json(Regions)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const addRegion = async(req, res) =>{
try{
    const body = { name: req.body.name , countryId: req.body.countryId, userId:req.body.userId}
     const col = await regions.create(body);
    return res.status(200).json(col)
}
catch(err){
    return res.status(500).json({ err: err.message })
} 
}

const deleteRegion = async(req, res) =>{
    try{
         const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const RegionId = req.params.id
        const ress = await regions.destroy({ where:{id : RegionId}})
        return res.status(200).json(ress);    
        
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}

 const updateRegion = async(req, res) =>{
   try{
        const RegionId = req.params.id
        const {name, countryId, userId } = req.body
        const ress = await regions.findOne({ where:{id : RegionId}})
        ress.name = name
        ress.countryId = countryId
        ress.userId = userId
        ress.save()
        return res.status(200).json(req.body)
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}

module.exports = {
    getRegions,
    getRegion, 
    addRegion, 
    deleteRegion, 
    updateRegion,
    loadRegions
    
}