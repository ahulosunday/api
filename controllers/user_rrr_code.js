const { user_rrr, users, enrolee_rrr_code } = require('../models');
const jwt = require('jsonwebtoken')


const getEnrolee_rrr_code = async(req, res) =>{
    try{
        const id = req.params.id
        const User_rrrsCode = await enrolee_rrr_code.findOne({ 
            where:{id: id}, 
            include: [users, user_rrr ]})
        return res.status(200).json(User_rrrsCode)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const getEnrolee_rrr_codeByCode = async(req, res) =>{
    try{
        const code = req.params.code
        const User_rrrsCode = await enrolee_rrr_code.findOne({ where:{code: code}, include: [users, user_rrr ], order:[['id', 'DESC']]})
        return res.status(200).json(User_rrrsCode)
    }
    catch(err){
        return res.status(501).json(err.message)
    }

}
const getEnrolee_rrr_codeByUserId = async(req, res) =>{
    try{
        const userId = req.params.userId
        const User_rrrsCode = await enrolee_rrr_code.findOne({ where:{userId: userId}, include: [users, user_rrr ], order:[['id', 'DESC']]})
        return res.status(200).json(User_rrrsCode)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const getEnrolee_rrr_codeByUserIdCode = async(req, res) =>{
    try{
        const userId = req.params.userId
        const code = req.params.code
        const User_rrrsCode = await enrolee_rrr_code.findOne({ where:{userId: userId, code: code}, include: [users, user_rrr ], order:[['id', 'DESC']]})
        return res.status(200).json(User_rrrsCode)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const getEnrolee_rrr_codes = async(req, res) =>{
    try{
        const User_rrrsCode = await enrolee_rrr_code.findAll({ include: [users, user_rrr ]})
        return res.status(200).json(User_rrrsCode)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const addEnrolee_rrr_code = async(req, res) =>{
    try{
        const { user_rrrId, userId, code} = req.body

        const User_rrrs = await enrolee_rrr_code.create({user_rrrId:user_rrrId, userId:userId, code:code})
        return res.status(200).json(User_rrrs)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const addEnrolee_rrr_codes = async(req, res) =>{
try{
   const q =  await enrolee_rrr_code.bulkCreate(req.body);
  return res.status(200).json(q)
}
catch(err){
    return res.status(500).json({ err: err.message })
}    
}


module.exports = {
    getEnrolee_rrr_code,
    getEnrolee_rrr_codes,
    getEnrolee_rrr_codeByUserId,
    getEnrolee_rrr_codeByCode,
    addEnrolee_rrr_code,
    getEnrolee_rrr_codeByUserIdCode,
    addEnrolee_rrr_codes
    
}