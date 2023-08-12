import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

const send = async(req, res) =>{
   try{
    const { to, subject,msg }= req.body
const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
  auth: {
    user: 'my_user',
    pass: 'my_password',
  },
});

const emailHtml = render(msg);

const options = {
  from: 'you@example.com',
  to: to,
  subject: subject,
  html: emailHtml,
};

const feedbact = await transporter.sendMail(options);
return res.status(200).json(feedbact)
   }
   catch(err){
return res.status(500).json(err)
   }
}

module.exports = {send}