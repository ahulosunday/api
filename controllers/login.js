const { users, roles } = require('../models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Login = async (req, res) => {
    
    try {
       const jwtkey = "jwtkey"
        const { username, password } = req.body
        const user = await users.findOne({ 
            where: { username: username}
          });
          if(user.length === 0){
            return res.status(400).json({error: "Invalid username or Password!"});
          }
         
       if(await bcrypt.compare(password, user.password)){
       const token = jwt.sign({id:user.id}, jwtkey);
       const { password, ...other} = user
              res.cookie("access_token", token, {
        httpOnly: true
       }).status(200).json(user);
       }     
    } catch (error) {
        return res.status(500).json({ error: "Invalid username or password" })
    }
}


module.exports = {
    Login
    
}