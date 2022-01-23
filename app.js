const express = require('express');
const path = require('path');
const nodeMailer = require('nodemailer');
const { user, pass } = require('./config/production.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/send', (req, res) => {
  const { name, email: from, subject, message } = req.body;
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from,
    to: 'damriabdellah@gmail.com',
    subject: `Email from ${from} about ${subject}`,
    text: `I am ${name} and This is my message :\n${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(500).json({ error });
    } else {
      return res.status(200).json({ response: info.response });
    }
  });
});

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}...`));
