const { user_rrr, users, gifship, gifshiptype, gifshipPackage } = require('../models');
const jwt = require('jsonwebtoken')


const getUser_rrrs = async(req, res) =>{
    try{
        const User_rrrs = await user_rrr.findAll({ include: [users,gifship, gifshiptype, gifshipPackage ]})
        return res.status(200).json(User_rrrs)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}


const getUser_rrr =async(req, res) =>{
   try{
        const User_rrrId = req.params.id
        const User_rrrs = await user_rrr.findOne({include: [users,gifship, gifshiptype, gifshipPackage ], where:{id : User_rrrId}})
        return res.status(200).json(User_rrrs)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}

const getUser_rrrByRRR =async(req, res) =>{
   try{
        const rrr_number = req.params.id
        const User_rrrs = await user_rrr.findOne({include: [users,gifship, gifshiptype, gifshipPackage ], where:{rrr_number : rrr_number}})
        return res.status(200).json(User_rrrs)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}
const getUser_rrrByUserId =async(req, res) =>{
   try{
        const userId = req.params.userId
        
        const User_rrrs = await user_rrr.findAll({include: [users,gifship, gifshiptype, gifshipPackage ], where:{userId : userId, activated: 1} })
        return res.status(200).json(User_rrrs)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}

const addUser_rrr = async(req, res) =>{
try{
    const { rrr_number,	userId,	activated,	activatedby,	amount,	duration,	gifshipId,	gifshipTypeId,	gifshipPackageId,	activated_date,	expired_date} = req.body
    const q = await user_rrr.findOne({ where:{userId:userId, activated: 1}})
    if(q){
    q.activated = false
    q.save()
    }
   const col = await user_rrr.create({ rrr_number:rrr_number,	userId:userId,	activated:activated,	activatedby:activatedby,	amount:amount,	duration:duration,	gifshipId:gifshipId,	gifshipTypeId:gifshipTypeId,	gifshipPackageId:gifshipPackageId,	activated_date:activated_date,	expired_date:expired_date});
    return res.status(200).json(col)
}
catch(error){
    return res.status(500).json({ error: error.message });
}
  
   
}

const deleteUser_rrr = async(req, res) =>{
    try{
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const User_rrrId = req.params.id
        const ress = await user_rrr.destroy({ where:{id : User_rrrId}})
        return res.status(200).json(token);    
        
    }
    catch(error){
        return res.status(200).json(error.message)
    }
}

 const updateUser_rrr = async(req, res) =>{
   try{
        const User_rrrId = req.params.id
       const { rrr_number,	userId,	activated,	activatedby,	amount,	duration,	gifshipId,	gifshipTypeId,	gifshipPackageId,	activated_date,	expired_date} = req.body
    
        const ress = await country.findOne({ where:{id : User_rrrId}})
        ress.rrr_number = rrr_number
        ress.userId= userId
        ress.activated = activated
        ress.activatedby = activatedby
        ress.amount= amount
        ress.duration = duration
        ress.gifshipId = gifshipId
        ress.gifshipTypeId = gifshipTypeId
        ress.gifshipTypePackageId = gifshipPackageId
        ress.activated_date = activated_date
        ress.expired_date = expired_date
        ress.save()
        return res.status(200).json(ress)
    }
    catch(error){
        return res.status(200).json(error.message)
    }
}
const activateUser_rrr = async(req, res) =>{
   try{
        const User_rrrId = req.params.id
       const {activated,	activatedby,	activated_date,	expired_date} = req.body
    
        const ress = await country.findOne({ where:{id : User_rrrId}})
       ress.expired_date = expired_date
       ress.activated_date = activated_date
        ress.activated = activated
        ress.activatedby = activatedby
        ress.save()
        return res.status(200).json(ress)
   }
   catch(error){
     return res.status(200).json(error.message)
   }
}

module.exports = {
    activateUser_rrr,
    getUser_rrrs,
    getUser_rrr, 
    addUser_rrr, 
    deleteUser_rrr, 
    updateUser_rrr,
    getUser_rrrByRRR,
    getUser_rrrByUserId,
    
    
}

//rrr_number	userId	activated	activatedby	amount	duration	gifshipId	gifshipTypeId	gifshipPackageId	activated_date	expired_date	