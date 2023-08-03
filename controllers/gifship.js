
const { where } = require('sequelize');
const {gifship, users, gifshiptype }  = require('../models');

const createGifship = async (req, res) => {
        try {
        
    } catch (error) {
       return res.json(error)
    }
}
const GifshipbyId = async(req, res )=>{
    try{
        const id = req.params.id
       const gif = await gifshiptype.findAll({include: [users ], where:{ gifshipId: id}});
        return res.status(200).json(gif)
    }
    catch(errors){
     return res.status(200).json(errors)
    }
}
const getGifship = async(req, res )=>{
    try{
       const gif = await gifship.findAll({include: [users]});
        return res.status(200).json(gif)
    }
    catch(errors){
     return res.status(200).json(errors)
    }
}

const createGifshipType = async(req, res) =>{
    const {name,	gifshipId,	userId } = req.body
 const gType = await gifshiptype.create({name,	gifshipId,	userId})
 return res.status(200).json(gType)
}
const getGifshipList = async(req, res )=>{
    try{
       const gif = await gifshiptype.findAll({
       include:[users, gifship]
       
       });
        return res.status(200).json(gif)
    }
    catch(errors){
     return res.status(200).json(errors)
    }
}
const getGifshipDelete = async(req, res )=>{
    try{
        const id  = req.params.id
        const token = req.cookies.access_token
        if(!token) return res.status(401).json("Not authenticated")
        const gif = await gifshiptype.destroy({ where:{id: id }});
        return res.status(200).json("One record deleted successfully");
    }
    catch(errors){
     return res.status(200).json(errors)
    }
}
const GifshipEdit = async(req, res )=>{
    try{
        const id  = req.params.id
      const gif = await gifshiptype.update({ where:{id: id }});
        return res.status(200).json(gif);
    }
    catch(errors){
     return res.status(200).json(errors)
    }
}
//Gifshipone
const Gifshipone = async(req, res )=>{
    try{
        const id  = req.params.id
      const gif = await gifshiptype.findOne({ where:{id: id }});
        return res.status(200).json(gif);
    }
    catch(errors){
     return res.status(200).json(errors)
    }
}
//============GifshipUpdate
const GifshipUpdate = async(req, res )=>{
    try{
        const id = req.params.id
       const { name,	gifshipId,	userId } = req.body
      const gif = await gifshiptype.findOne({ where:{id: id }});
      gif.name = name,
      gif.gifshipId = gifshipId, 
      gif.userId = userId

      await gif.save()

        return res.status(200).json(gif);
    }
    catch(errors){
     return res.status(200).json(errors)
    }
}

module.exports = {
    createGifship,
    getGifship,
    createGifshipType,
    getGifshipList,
    getGifshipDelete,
    GifshipEdit,
    Gifshipone,
     GifshipUpdate,
     GifshipbyId,
 
     
    
}