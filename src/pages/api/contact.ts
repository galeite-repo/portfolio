import nodemailer from 'nodemailer';

const email = process.env.MAILADDRESS;
const emailPass = process.env.MAILPASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, 
  tls: {
    ciphers: 'SSLv3'                            
},
  auth: {
    user: email,
    pass: emailPass
  }
});
const mailer = ({ senderMail, name, text }) => {
  const from = `${name} <${senderMail}>`;
  const message = {
    from,
    to: `galeite@icloud.com`,
    subject: `[Portfolio] - Nova mensagem - [${name}]`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};
export default async (req, res) => {
  const { senderMail, name, content } = req.body;

  if (!senderMail || !name || !content) {
    res.status(403).send();
    return;
  }
  const mailerRes = await mailer({ senderMail, name, text: content });
  res.send(mailerRes);
};
