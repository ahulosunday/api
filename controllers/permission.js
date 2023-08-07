const { permissions, role, users, role_permissions } = require('../models');
const jwt = require('jsonwebtoken')


const getPermissions = async(req, res) =>{
    try{
        const perm = await permissions.findAll()
        return res.status(200).json(perm)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
const getRolesPermissions = async(req, res) =>{
    try{
        const  id = req.params.id
        const perrRole = await role_permissions.findAll({include:[permissions], where:{roleId: id}})
        return res.status(200).json(perrRole)
    }
    catch(err){
        return res.status(200).json(err.message)
    }

}
module.exports = {
getPermissions,
getRolesPermissions,
}