const sgMail = require('@sendgrid/mail')




sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sohel.nkabir@gmail.com',
        subject: 'Thnaks for joining in',
        text: `Welcom to the app, ${name}. Let me know the feedback .`
       
    })
}
const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sohel.nkabir@gmail.com',
        subject: 'Cancellation mail',
        text: `Let us know why you cancelling the account, ${name}!.`
       
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}