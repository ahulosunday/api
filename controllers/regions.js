const { regions, users,country } = require('../models');
const jwt = require('jsonwebtoken')
const {getPagination, getPagingData} = require('../helpers/paging')


const getRegions = async(req, res) =>{
    try{
        const  page =  req.params.page
        const per_page = req.params.per_page
         const { limit, offset } = getPagination(page, per_page)
        const data = await regions.findAndCountAll({ 
            include: [country,users],
            order:[['name','ASC']],
            limit:limit, offset:offset
            })
           const response = getPagingData(data, page, limit);
        return res.status(200).json(response)
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