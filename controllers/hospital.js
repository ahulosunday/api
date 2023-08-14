const { states, users,country, regions, lga, hospital, ward } = require('../models');
const jwt = require('jsonwebtoken')
const {getPagination, getPagingData } = require('../helpers/paging')


const getHospitals = async(req, res) =>{
    try{
       
        const  page =  req.params.page
        const per_page = req.params.per_page
         const { limit, offset } = getPagination(page, per_page)
        const data = await hospital.findAndCountAll({ 
           include: [country,users, regions, states,lga, ward], 
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


const getHospital =async(req, res) =>{
   try{
        const hospitalId = req.params.id
        const hospitals = await hospital.findAll({include: [country,users, regions, states,lga, ward], where:{id : hospitalId}})
        return res.status(200).json(hospitals)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
//,
const getHospitalWithInclude = async(req, res)=>{
try{
        const hospitalId = req.params.id
        const hospitals = await hospital.findOne({ where:{id : hospitalId}, include: [country,users, regions, states,lga, ward]})
        return res.status(200).json(hospitals)
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}
const getHospitalWithLga = async(req, res)=>{
try{
        const hospitalId = req.params.countryId
        const regionIdId = req.params.regionId
        const stateIdId = req.params.stateId
        const lgaId = req.params.lgaId

        const hospitals = await hospital.findAll({ where:{countryId : hospitalId, regionId: regionIdId, stateId: stateIdId, lgaId: lgaId}, include: [country,users, regions, states,lga]})
        return res.status(200).json(hospitals)
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}
//
const addHospital = async(req, res) =>{
try{
    const body = { hospitalCode, name, address, phone,contactAddress, countryId, regionId, stateId,lgaId, userId, wardId} = req.body
     const col = await hospital.create(body);
    return res.status(200).json(col)
}
catch(err){
    return res.status(500).json({ err: err.message })
}
  
   
}

const deleteHospital = async(req, res) =>{
    try{
        
        const hospitalId = req.params.id
        const ress = await hospital.destroy({ where:{id : hospitalId}})
        return res.status(200).json(ress);    
        
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}

 const updateHospital = async(req, res) =>{
   try{
        const hospitalId = req.params.id
       const body = { hospitalCode, name, address, phone,contactAddress, countryId, regionId, stateId,lgaId, userId, wardId} = req.body
        const ress = await hospital.findOne({ where:{id : hospitalId}})
        ress.name = name
        ress.hospitalCode= hospitalCode
        ress.countryId = countryId
        ress.userId = userId
        ress.wardId = wardId
        ress.regionId = regionId
        ress.stateId = stateId
        ress.lgaId = lgaId
        ress.address = address
        ress.phone = phone
        ress.contactAddress = contactAddress
        ress.save()
        return res.status(200).json(ress)
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}

module.exports = {
    getHospitals,
    getHospital, 
    addHospital, 
    deleteHospital, 
    updateHospital,
    getHospitalWithInclude,
    getHospitalWithLga,
}