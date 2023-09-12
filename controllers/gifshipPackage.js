const { users, gifshiptype, gifship, gifshipPackage } = require('../models');
const jwt = require('jsonwebtoken')
const { getPagination, getPagingData } = require('../helpers/paging')


const getGifshipPackages = async(req, res) =>{
    try{
         const  page =  req.params.page
        const per_page = req.params.per_page
         const { limit, offset } = getPagination(page, per_page)
        const data = await gifshipPackage.findAndCountAll({ 
             include: [users, gifshiptype, gifship] , 
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

const getGifshipPackagesAll = async(req, res) =>{
    try{
        
        const data = await gifshipPackage.findAll({ 
             include: [users, gifshiptype, gifship] , order:[['name','ASC']]
            })
        return res.status(200).json(data)
        
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const getGifshipPackageWithGigshipTypeId =async(req, res) =>{
   try{
        const GifshipTypeId = req.params.id
        const GifshipPackage = await gifshipPackage.findAll({ include: [users, ], where : { gifshipTypeId : GifshipTypeId}})
        return res.status(200).json(GifshipPackage)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const getGifshipPackage =async(req, res) =>{
   try{
        const GifshipPackageId = req.params.id
        const GifshipPackage = await gifshipPackage.findOne({ where:{id : GifshipPackageId}, include: [users, gifshiptype, gifship]})
        return res.status(200).json(GifshipPackage)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const addGifshipPackage = async(req, res) =>{
try{
    const body = { name, amount,	userId,	gifshipTypeId,gifshipId,qty,duration, maxNumber} = req.body
     const col = await gifshipPackage.create(body);
    return res.status(200).json(col)
}
catch(err){
    return res.status(500).json({ err: err.message })
}
  
   
}

const deleteGifshipPackage = async(req, res) =>{
    try{
        /*
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        */
        const GifshipPackageId = req.params.id;
        const ress = await gifshipPackage.destroy({ where:{id : GifshipPackageId}})
        return res.status(200).json(ress);    
        
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}

 const updateGifshipPackage = async(req, res) =>{
   try{
        const GifshipPackageId = req.params.id
        const {name,	amount,	userId,	gifshipTypeId, gifshipId, 	qty, duration, maxNumber} = req.body
        const ress = await gifshipPackage.findOne({ where:{id : GifshipPackageId}})
        ress.name = name
        ress.amount= amount
        ress.userId = userId
        ress.gifshipTypeId = gifshipTypeId
        ress.gifshipId = gifshipId
        ress.qty = qty
        ress.duration= duration
        ress.maxNumber = maxNumber
        ress.save()
        return res.status(200).json(ress)
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}


module.exports = {
    
    getGifshipPackage,
    getGifshipPackages, 
    addGifshipPackage, 
    deleteGifshipPackage, 
    updateGifshipPackage,
    getGifshipPackageWithGigshipTypeId,
    getGifshipPackagesAll
    
}