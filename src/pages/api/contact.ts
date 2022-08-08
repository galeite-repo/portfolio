import nodemailer from 'nodemailer';

const email = process.env.MAILADDRESS;
const emailPass = process.env.MAILPASS;

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  secure: false,
  port: 587,
  tls: {
    rejectUnauthorized: false,
    // ciphers: 'SSLv3'
  },
  auth: {
    user: email,
    pass: emailPass
  }

});
 const  mailer = async ({ senderMail, name, text }) => {
  const from = email;
  const message = {
    from,
    to: `galeite@icloud.com`,
    subject: `[Portfolio] - Nova mensagem - [${senderMail}]`,
    text,
  };

  return await new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      error ? reject(error) : resolve(info)
    }
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
