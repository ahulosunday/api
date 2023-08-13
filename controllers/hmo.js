const { hmo, users, country, regions, states,lga, ward } = require('../models');
const jwt = require('jsonwebtoken')
const {getPagination, getPagingData }= require('../helpers/paging')


const getHmos = async(req, res) =>{
    try{
        const  page =  req.params.page
        const per_page = req.params.per_page
         const { limit, offset } = getPagination(page, per_page)
        const data = await hmo.findAndCountAll({ 
            include: [users,country,regions,states,lga,ward], 
            order:[['name','ASC'], ['code','ASC']],
            limit:limit, offset:offset
            })
           const response = getPagingData(data, page, limit);
        return res.status(200).json(response)
    }
    catch(err){
        return res.status(501).json(err.message)
    }

}


const getHmo =async(req, res) =>{
   try{
        const HmoId = req.params.id
        const Hmos = await hmo.findOne({ 
        where:{id : HmoId},
        include: [users,country,regions,states,lga,ward],
        order:[['name','ASC'], ['code','ASC']]
        })
        return res.status(200).json(Hmos)
    }
    catch(err){
        return res.status(501).json(err.message)
    }

}

const addHmo = async(req, res) =>{
try{
     const col = await hmo.create({ name: req.body.name , code: req.body.code,userId: req.body.userId, address:req.body.address, phone: req.body.phone, email: req.body.email, countryId: req.body.countryId, regionId:req.body.regionId,stateId:req.body.stateId, lgaId: req.body.lgaId,wardId:req.body.wardId});
    return res.status(200).json(col)
}
catch(err){
    return res.status(500).json({ err: err.message })
}
  
   
}

const deleteHmo = async(req, res) =>{
    try{
       
        const HmoId = req.params.id
        const ress = await hmo.destroy({ where:{id : HmoId}})
        return res.status(200).json(ress);    
        
    }
    catch(err){
        return res.status(501).json(err.message)
    }
}

 const updateHmo = async(req, res) =>{
   try{
        const HmoId = req.params.id
        const {name, code, userId, address, phone, email, countryId, regionId,stateId,lgaId,wardId } = req.body
        const ress = await hmo.findOne({ where:{id : HmoId}})
        ress.name = name
        ress.code= code
        ress.userId = userId
        ress.address = address
        ress.phone = phone
        ress.email=email
        ress.countryId = countryId
        ress.regionId = regionId
        ress.stateId = stateId
        ress.lgaId = lgaId
        ress.wardId = wardId
        ress.save()
        return res.status(200).json(ress)
    }
    catch(err){
        return res.status(501).json(err.message)
    }
}

module.exports = {
    getHmos,
    getHmo, 
    addHmo, 
    deleteHmo, 
    updateHmo,
    
}