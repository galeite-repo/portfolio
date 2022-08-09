import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { senderMail, name, content } = req.body;

  if (!senderMail || !name || !content) {
    res.status(403).send();
    return;
  }
  try {
    await sendgrid.send({
      to: 'galeite@icloud.com',
      from: "galeite@hotmail.com",
      subject: `[Portfolio News] - [${name}] - ${senderMail}`,
      text: content
    });
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};
