require('dotenv').config()

const accountSID = process.env.TWILIO_ACCOUNT_SID 
const authToken =  process.env.TWILIO_AUTH_TOKEN

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENGRID_API_KEY)

const client = require('twilio')(accountSID, authToken)

//Envio mensajes de texto
client.messages.create({
    body: 'Bienvenidos a la tienda de Tamales',
    from: '+19842657639',
    to: '+573002836295'
}).then(message => console.log(`Mensaje enviado ${message.sid}`))

//Envio de mensajes de whatsapp
client.messages.create({
    body: 'Bienvenidos a la tienda de Tamales',
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+573002836295'
}).then(message => console.log(`Mensaje enviado ${message.sid}`))
const msg = {
    to:'mesiasbm@gmail.com',
    from:'mesiasbm@hotmail.com',
    subject:'prueba de sengrid con NodeJs',
    text:'Bienvenidos a la tienda virtual de tamales',
    bcc: ['mesiasbm@yahoo.com'],
    files: {
        'file1.txt': __dirname + '/file1.txt',
        'img1.jpg': __dirname + '/img1.jpg'
    },
    
}


sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
