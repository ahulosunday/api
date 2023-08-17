const { states, users,country, regions } = require('../models');
const jwt = require('jsonwebtoken')
const {getPagination, getPagingData}=require('../helpers/paging')


const getStates = async(req, res) =>{
    try{
        
        const data = await states.findAll({ 
             include: [country,users, regions], 
            order:[['name','ASC']]
           
            })
         
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const getStatesPaging = async(req, res) =>{
    try{
        const  page =  req.params.page
        const per_page = req.params.per_page
         const { limit, offset } = getPagination(page, per_page)
        const data = await states.findAndCountAll({ 
             include: [country,users, regions], 
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
    getStatesPaging
    
}