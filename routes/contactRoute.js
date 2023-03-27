const router = require("express").Router();
const mailgun = require('mailgun-js') ;

const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN })


router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.email.length === 0 ||
    data.subject.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }
  mg.messages().send({
    from: `<${data.email}>`,
    to: `amarie.nun@gmail.com`,
    subject: `${data.subject}`,
    text: `${data.message}`,
  },
  (error, body) => {
    if (error) {
      console.log(error)
       return res.status(400).json({ msg: 'Please Fill All The Fields!'}) 
    } else if(error) {
      console.log(body)
      return res.status(500).json({ msg: 'There is a server error'})
    } else {
      return res.status(200).json({ msg: 'Thank you for contacting Alex!'})
    }
  })
});
module.exports = router;