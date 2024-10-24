const nodemailer = require('nodemailer')

const sendMailFunc = async (options)=>{
    const transporter = nodemailer.createTransport({
        service: process.env.Email_SERVICE,

        auth: {
            email: process.env.USERNAME_EMAIL,
            password: process.env.USERNAME_PASSWORD
        }
    })



    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: options.to,
      subject: options.subject,
      html: options.text  
    
    }

  transporter.sendMail(mailOptions, function(err, msg){
    if(err){
   console.log(err)
    }
    if(msg){
   console.log(`errors in logic`)
    }
  })
}

module.exports = { sendMailFunc }
