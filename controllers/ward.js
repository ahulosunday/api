const { lga, users,country, regions,states, ward } = require('../models');
const jwt = require('jsonwebtoken')
const {getPagination, getPagingData}=require('../helpers/paging')


const getWards = async(req, res) =>{
    try{
         
        const data = await ward.findAll({ 
            include: [country,users, regions, states, lga], 
            order:[['name','ASC']]
           
            })
           
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({ err: err.errors[0].message})
    }

}
const getWardsPaging = async(req, res) =>{
    try{
         const  page =  req.params.page
        const per_page = req.params.per_page
         const { limit, offset } = getPagination(page, per_page)
        const data = await ward.findAndCountAll({ 
            include: [country,users, regions, states, lga], 
            order:[['name','ASC']],
            limit:limit, offset:offset
            })
           const response = getPagingData(data, page, limit);
        return res.status(200).json(response)
    }
    catch(err){
        return res.status(500).json({ err: err.errors[0].message})
    }

}
const getWard =async(req, res) =>{
   try{
        const WardId = req.params.id
        const Ward = await ward.findOne({ where:{id : WardId}})
        return res.status(200).json(Ward)
    }
    catch(err){
        return res.status(200).json({ err: err.errors[0].message})
    }

}

const addWard = async(req, res) =>{
try{
    const body = { name , code, countryId, regionId, stateId, lgaId, userId} = req.body
     const col = await ward.create(body);
    return res.status(200).json(col)
}
catch(err){
    return res.status(500).json({ err: err.errors[0].message})
}
  
   
}

const deleteWard = async(req, res) =>{
    try{
       
        const WardId = req.params.id
        await ward.destroy({ where:{id : WardId}}).then(resp=>{
            return res.status(200).json(resp);   
        })
        .catch(err=>{
            return res.status(500).json({ err: 'Error occured, can not delete ward already used'})
        })
         
        
    }
    catch(err){
        return res.status(500).json({ err: err.message})
    }
}

 const updateWard = async(req, res) =>{
   try{
        const WardId = req.params.id
        const {name, code, countryId, userId, stateId, regionId, lgaId } = req.body
        const ress = await ward.findOne({ where:{id : WardId}})
        ress.name = name
        ress.code= code
        ress.countryId = countryId
        ress.userId = userId
        ress.stateId = stateId
        ress.regionId = regionId
        ress.lgaId = lgaId
        ress.save()
        .then(resp=>{
        return res.status(200).json(resp);
      }).catch(err=>{
        return res.status(500).json({ err: err.errors[0].message})
      })

    }
    catch(err){
       return res.status(500).json({ err: err.errors[0].message})
    }
}
const loadWardswithLga = async(req, res) =>{
    try{
        const lgaId = req.params.lgaId
        const lga= await ward.findAll({where:{lgaId: lgaId}})
        return res.status(200).json(lga)
    }
    catch(error){
       return res.status(500).json({ err: err.errors[0].message})
    }

}

module.exports = {
   getWard,
    getWards, 
    addWard, 
    deleteWard, 
    updateWard,
    loadWardswithLga,
    getWardsPaging
    
}