const { user_rrr, users, gifship, gifshiptype, gifshipPackage, enrolee_rrr_code } = require('../models');
const jwt = require('jsonwebtoken')
const {getPagination, getPagingData} = require('../helpers/paging')
const { Op } = require('sequelize');


const getUser_rrrs = async(req, res) =>{
    try{
       
        const data = await user_rrr.findAll({ 
            include: [users,gifship, gifshiptype, gifshipPackage ]
           
            })
         
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const getUser_rrrsByNotActivated = async(req, res) =>{
    try{
       
        const data = await user_rrr.findAll({ where:{activated: 0},
            include: [users,gifship, gifshiptype, gifshipPackage ]
           
            })
         
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const getUser_rrrsPaging = async(req, res) =>{
    try{
        const  page =  req.params.page
        const per_page = req.params.per_page
         const { limit, offset } = getPagination(page, per_page)
        const data = await user_rrr.findAndCountAll({ 
            include: [users,gifship, gifshiptype, gifshipPackage ],
            order:[['id','DESC']],
            limit:limit, offset:offset
            })
           const response = getPagingData(data, page, limit);
        return res.status(200).json(response)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const getAllByUserId = async (req, res) =>{
    try{
        const userId = req.params.userId;
        const qurey = await user_rrr.findOne({where:{userId: userId}, order:[['id', 'DESC']]})
        return res.status(200).json(qurey)
    }
    catch(err){
     return res.status(500).json(err.message)
    }
}


const getUser_rrr =async(req, res) =>{
   try{
        const User_rrrId = req.params.id
        const User_rrrs = await user_rrr.findOne({include: [users,gifship, gifshiptype, gifshipPackage ], where:{id : User_rrrId}})
        return res.status(200).json(User_rrrs)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const getUser_rrrByRRR =async(req, res) =>{
   try{
        const rrr_number = req.params.id
        const User_rrrs = await user_rrr.findOne({include: [users,gifship, gifshiptype, gifshipPackage ], where:{rrr_number : rrr_number}})
        return res.status(200).json(User_rrrs)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const getUser_rrrByUserId =async(req, res) =>{
   try{
        const userId = req.params.userId
        const User_rrrs = await user_rrr.findAll({
            include: [users,gifship, gifshiptype, gifshipPackage ], 
            where:{userId : userId, activated: 1} })
        return res.status(200).json(User_rrrs)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const getUser_rrrByExpired =async(req, res) =>{
   try{
        const startedDate = new Date(req.params.sdate);
        const endDate = new Date(req.params.edate);

      const User_rrrs = await  user_rrr.findAll({
        where : { expired_date : {[Op.between] : [startedDate , endDate ]}},
         include: [users, gifship, gifshiptype, gifshipPackage ]
        })
       
        return res.status(200).json(User_rrrs)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}

const addUser_rrr = async(req, res) =>{
try{
    const { rrr_number,	userId,	activated,	activatedby,	amount,	duration,	gifshipId,	gifshipTypeId,	gifshipPackageId,	activated_date,	expired_date, maxNumber, minNumber, authNumber} = req.body
    const q = await user_rrr.findOne({ where:{userId:userId, activated: 1}})
    if(q){
    q.activated = false
    q.save()
    }
   const col = await user_rrr.create({ rrr_number:rrr_number,	userId:userId,	activated:activated,	activatedby:activatedby,	amount:amount,	duration:duration,	gifshipId:gifshipId,	gifshipTypeId:gifshipTypeId,	gifshipPackageId:gifshipPackageId,	activated_date:activated_date,	expired_date:expired_date, maxNumber:maxNumber, minNumber:minNumber, authNumber: authNumber});
    return res.status(200).json(col)
}
catch(err){
    return res.status(500).json({ err: err.message });
}
  
   
}

const deleteUser_rrr = async(req, res) =>{
    try{
       // const token = req.cookies.access_token
       // if(!token) return res.status(401).json({err: "Not authenticated"})
        const User_rrrId = req.params.id
        const delete_user_rrr = await enrolee_rrr_code.destroy({where:{user_rrrId: User_rrrId}})
        const ress = await user_rrr.destroy({ where:{id : User_rrrId}})
        return res.status(200).json(ress);    
        
    }
    catch(err){
        return res.status(200).json(err.message)
    }
}
 const updateUser_rrr = async(req, res) =>{
   try{
        const User_rrrId = req.params.id
       const { rrr_number,	userId,	activated,	activatedby,	amount,	duration,	gifshipId,	gifshipTypeId,	gifshipPackageId,	activated_date,	expired_date, maxNumber, minNumber, authNumber: authNumber} = req.body
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
        ress.minNumber = minNumber
        ress.maxNumber = maxNumber
        ress.authNumber = authNumber
        ress.save()
        return res.status(200).json(ress)
    }
    catch(err){
        return res.status(200).json(err.message)
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
   catch(err){
     return res.status(200).json(err.message)
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
    getUser_rrrsPaging,
    getAllByUserId,
    getUser_rrrByExpired,
    getUser_rrrsByNotActivated
    
    
}