const { country, users } = require('../models');
const jwt = require('jsonwebtoken')


const getCountrys = async(req, res) =>{
    try{
        const Countrys = await country.findAll({ include: {model: users }})
        return res.status(200).json(Countrys)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}


const getCountry =async(req, res) =>{
   try{
        const CountryId = req.params.id
        const Countrys = await country.findOne({ where:{id : CountryId}})
        return res.status(200).json(Countrys)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}

const addCountry = async(req, res) =>{
try{
    
     const col = await country.create({ name: req.body.name , code: req.body.code,shortname: req.body.shortname,currency: req.body.currency, userId: req.body.userId});
    return res.status(200).json(col)
}
catch(error){
    return res.status(500).json({ error: error.message })
}
  
   
}

const deleteCountry = async(req, res) =>{
    try{
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const CountryId = req.params.id
             
        const ress = await country.destroy({ where:{id : CountryId}})
        return res.status(200).json(token);    
        
    }
    catch(error){
        return res.status(200).json(error.message);
    }
}

 const updateCountry = async(req, res) =>{
   try{
        const CountryId = req.params.id
        const {name, code, shortname,currency, userId } = req.body
        const ress = await country.findOne({ where:{id : CountryId}})
        ress.name = name
        ress.code= code
        ress.shortname = shortname
        ress.currency = currency
        ress.userId = userId
        ress.save()
        return res.status(200).json(ress)
    }
    catch(error){
        return res.status(200).json(error.message)
    }
}

module.exports = {
    getCountrys,
    getCountry, 
    addCountry, 
    deleteCountry, 
    updateCountry,
    
    
}