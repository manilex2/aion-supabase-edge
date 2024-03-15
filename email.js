const nodemailer = require("nodemailer");
const pug = require('pug');

module.exports = {
    sendEmail
}

async function sendEmail(data) {
  try {
    const compiledFunction = pug.compileFile('emailTemplate.pug');
	  const compiledContent = compiledFunction(data);
    let transporter = nodemailer.createTransport({
      host: 'smtp.resend.com',
      secure: true,
      port: 465,
      auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY,
      },
    });
  
  
    let info = await transporter.sendMail({
      from: process.env.USER_MAIL,
      to: "delivered@resend.dev",
      subject: data.subject,
      html: compiledContent
    });

    console.log(info);
  
    return info;
  } catch (error) {
    throw new Error(error);
  }
}