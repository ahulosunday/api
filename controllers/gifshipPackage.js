const { users, gifshiptype, gifship, gifshipPackage } = require('../models');
const jwt = require('jsonwebtoken')


const getGifshipPackages = async(req, res) =>{
    try{
        const GifshipPackage = await gifshipPackage.findAll({ include: [users, gifshiptype, gifship] })
        return res.status(200).json(GifshipPackage)
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
        const GifshipPackage = await gifshipPackage.findOne({ where:{id : GifshipPackageId}})
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
    getGifshipPackageWithGigshipTypeId
    
}