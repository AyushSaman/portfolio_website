// receving msg in mongo databese

import Contact from "../../models/Contact";
import connectdb from "../../middleware/mongoose"

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Invalid request!' })
    return
  }
  const messageBody = JSON.parse(req.body);
  const contact = new Contact({
    name: messageBody.name,
      email: messageBody.email,
      subject: messageBody.subject,
      message: messageBody.message
    });
   let newMessage = await contact.save()
   if (!newMessage) {
     res.status(500).json({ error: 'Sorry! something went wrong. please try again later' });
    } else {
      res.status(200).json({ success: 'Message sent successfully. I will reach you out soon!' });
    }
  }
export default connectdb(handler)


// process.env.SENDGRID_API_KEY