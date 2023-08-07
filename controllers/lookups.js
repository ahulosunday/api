const { lga, users,country, regions,states, ward } = require('../models');
const jwt = require('jsonwebtoken')

const lookUpWard = async(req, res) =>{
    try{
        const id = req.params.id
        const wards = await ward.findOne({where:{ id : id}})
        return res.status(200).json(wards)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const lookUpLga = async(req, res) =>{
    try{
        const id = req.params.id
        const Lga = await lga.findOne({where:{ id : id}})
        return res.status(200).json(Lga)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const lookUpState = async(req, res) =>{
    try{
        const id = req.params.id
        const Lga = await states.findOne({where:{ id : id}})
        return res.status(200).json(Lga)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const lookUpRegion = async(req, res) =>{
    try{
        const id = req.params.id
        const Lga = await regions.findOne({where:{ id : id}})
        return res.status(200).json(Lga)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const lookUpCountry = async(req, res) =>{
    try{
        const id = req.params.id
        const Lga = await country.findOne({where:{ id : id}})
        return res.status(200).json(Lga)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}


module.exports = {
    lookUpLga,
    lookUpCountry,
    lookUpRegion,
    lookUpState,
    lookUpWard,
    
}