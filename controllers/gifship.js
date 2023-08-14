
const { where } = require('sequelize');
const {gifship, users, gifshiptype }  = require('../models');
const { getPagination, getPagingData } = require('../helpers/paging')

const createGifship = async (req, res) => {
        try {
        
    } catch (err) {
       return res.json(err)
    }
}
const GifshipbyId = async(req, res )=>{
    try{
        const id = req.params.id
       const gif = await gifshiptype.findAll({include: [users ], where:{ gifshipId: id}});
        return res.status(200).json(gif)
    }
    catch(err){
     return res.status(200).json(err)
    }
}
const getGifship = async(req, res )=>{
    try{
        const gif = await gifship.findAll({
       include:[users]
       
       });
        return res.status(200).json(gif)
       
           
    }
    catch(err){
     return res.status(200).json(err)
    }
}

const createGifshipType = async(req, res) =>{
    const {name,	gifshipId,	userId } = req.body
 const gType = await gifshiptype.create({name,	gifshipId,	userId})
 return res.status(200).json(gType)
}
const getGifshipList = async(req, res )=>{
    try{
         const  page =  req.params.page
        const per_page = req.params.per_page
         const { limit, offset } = getPagination(page, per_page)
        const data = await gifshiptype.findAndCountAll({ 
          include: [users, gifship], 
            order:[['name','ASC']],
            limit:limit, offset:offset
            })
           const response = getPagingData(data, page, limit);
        return res.status(200).json(response)
    }
    catch(err){
     return res.status(200).json(err)
    }
}
const getGifshipDelete = async(req, res )=>{
    try{
        const id  = req.params.id
       
        const gif = await gifshiptype.destroy({ where:{id: id }});
        return res.status(200).json("One record deleted successfully");
    }
    catch(err){
     return res.status(200).json(err)
    }
}
const GifshipEdit = async(req, res )=>{
    try{
        const id  = req.params.id
      const gif = await gifshiptype.update({ where:{id: id }});
        return res.status(200).json(gif);
    }
    catch(err){
     return res.status(200).json(err)
    }
}
//Gifshipone
const Gifshipone = async(req, res )=>{
    try{
        const id  = req.params.id
      const gif = await gifshiptype.findOne({ where:{id: id }});
        return res.status(200).json(gif);
    }
    catch(err){
     return res.status(200).json(err)
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
    catch(err){
     return res.status(200).json(err)
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