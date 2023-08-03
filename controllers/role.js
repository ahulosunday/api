const {role, } = require('../models');
const perm = require('./role-permission')



const getRoles = async(req, res) =>{
    try{
        const roles = await role.findAll()
        return res.status(200).json(roles)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}


const getRole =async(req, res) =>{
   try{
        const roleId = req.params.id
        const roles = await role.findOne({ where:{id : roleId}})
        return res.status(200).json(roles)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}

const addRole = async(req, res) =>{
try{
     const rol = await role.create({ name: req.body.name , description: req.body.description, userId: req.body.userId});
    return res.status(200).json(rol)
}
catch(error){
    return res.status(500).json({ error: error.message })
}
  
   
}

const deleteRole = async(req, res) =>{
    try{
        const roleId = req.params.id
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const perms = await perm.deleteRolePemissionRoleId(req,res)
        if(perms){
        const ress = await role.destroy({ where:{id : roleId}})
        return res.status(200).json(ress)
        }
       return null
    }
    catch(error){
        return res.status(200).json(error.message)
    }
}

 const updateRole = async(req, res) =>{
   try{
        const roleId = req.params.id
        const {name, description, userId } = req.body
        const ress = await role.findOne({ where:{id : roleId}})
        ress.name = name
        ress.description= description
        ress.userId = userId
        ress.save()
        return res.status(200).json(ress)
    }
    catch(error){
        return res.status(200).json(error.message)
    }
}

module.exports = {
    getRoles,
    getRole, 
    addRole, 
    deleteRole, 
    updateRole,
    
}