const { users, gforms } = require('../models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const createUser = async (req, res) => {
    
    try {
        const salt = bcrypt.genSaltSync(10)////SALT should be created ONE TIME upon sign up
        const { username, password, email,uiid, roleid, imgurl, surname, othername, phone } = req.body
        const hashedPassword = bcrypt.hashSync(password, salt)
        if(username ==="" || password ==="" || email ===""){
            return res.status(500).json({ error: "Empty field not allowed" })
        }

        const user = await users.create({username:username, password:hashedPassword, email:email,uiid:uiid, roleid:roleid, imgurl: imgurl, surname: surname, othername: othername, phone: phone});
        return res.status(201).json({ user,});
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}
const findAllUser = async (req, res) => {
    
    try {

        const user = await users.findAll();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}
const changePassword = async(req, res)=>{
    try{
       
        const id = req.params.id
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(req.body.password, salt)
      const userlist = await users.findOne({ where: {id: id, username: req.body.username} })
        if(await bcrypt.compare(req.body.cpassword, userlist.password)){
       userlist.password = hashedPassword
       userlist.save()
      return res.status(200).json(userlist)
       }       
       
   return res.status(501).json('Can not associate your current password with any user')

    }
    catch(err){
        return res.status(500).json(err)

    }
}
module.exports = {
    createUser,
    findAllUser,
    changePassword
}