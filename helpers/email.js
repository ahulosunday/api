
const  nodemailer = require('nodemailer')


const send = async(req, res) =>{
 
   try{
    const { to, subject,msg }= req.body
const transporter = nodemailer.createTransport({
  host: 'thirty.qservers.net',
  port: 465,
  secure: true,
  auth: {
    user: 'theroyalschools@theroyalschools.com.ng',
    pass: '*g.R33fI+B@%',
  },
});


const options = {
  from: 'ahulosunday@gmail.com',
  to: to,
  subject: subject,
  html: msg,
};

const feedbact = await transporter.sendMail(options);

return res.status(200).json(feedbact);
   }
   catch(err){
return res.status(501).json(err);
   }
}

module.exports = {send}