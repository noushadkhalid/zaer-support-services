const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${req.body.name}\r\n
  Email: ${req.body.email}\r\n
  Phone: ${req.body.phone}\r\n
  Message: ${req.body.message}
 `;
  const data = {
    to:'zaer.services@gmail.com',
    from: 'zaer.services@gmail.com',
    subject: 'New enquiry message from zaersupportservices.com.au',
    text: message,
    html: message.replace(/\r\n/g, '<br>')


  };
  mail.send(data)
  res.status(200).json({ status: 'Ok' })
}
