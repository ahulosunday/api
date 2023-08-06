const { permissions, role, users, role_permissions } = require('../models');
const jwt = require('jsonwebtoken')

const getRolesPermissionAll = async(req, res) =>{
    try{
        const perrRole = await role_permissions.findAll({include:[permissions]})
        return res.status(200).json(perrRole)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}
const getRolesPermissions = async(req, res) =>{
    try{
        const  roleId = req.params.id
        const perrRole = await role_permissions.findAll({where:{roleId: roleId}, include:[permissions] })
        return res.status(200).json(perrRole)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}
const getRolePemissionId = async(req, res) =>{
    try{
        const  id = req.params.id
        const perrRole = await role_permissions.findAll({include:[permissions], where:{id: id}})
        return res.status(200).json(perrRole)
    }
    catch(error){
        return res.status(200).json(error.message)
    }

}
const addRolesPermissions = async(req, res) =>{
try{
   const q =  await role_permissions.bulkCreate(req.body);
  return res.status(200).json(q)
}
catch(error){
    return res.status(500).json({ error: error.message })
}
  
   
}

const deleteRolePemissions = async(req, res) =>{
    try{
        const id = req.params.id
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const ress = await role_permissions.destroy({ where:{id : id}})
        return res.status(200).json(ress)
    }
    catch(error){
        return res.status(200).json(error.message)
    }
}
const deleteRolePemissionRoleId  = async(req, res) =>{
    try{
        const id = req.params.id
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const ress = await role_permissions.destroy({ where:{roleId : id}})

        return true//res.status(200).json(ress)
    }
    catch(error){
       return false //res.status(200).json(error.message)
    }

}

const  deleteRolePemissionRoleIdPermissionId = async(req, res) =>{
    try{
        const roleId = req.params.roleId
        const permissionId = req.params.permissionId
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const ress = await role_permissions.destroy({ where:{roleId : roleId, permissionId: permissionId}})
        return true
    }
    catch(error){
        return false
    }

}
module.exports = {
    getRolesPermissions,
    deleteRolePemissions,
    addRolesPermissions,
    getRolesPermissionAll,
    deleteRolePemissionRoleId,
   getRolePemissionId,
   deleteRolePemissionRoleIdPermissionId,
}