const nodemailer = require("nodemailer");

exports.sendContactEmail = async (req, res) => {
  const { firstName, lastName, company, email, size, source, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // or use SMTP if you have one
    auth: {
      user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission - REKORY ${firstName} ${lastName}`,
    html: `
    <h3>New Enquiry Received:</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company Size:</strong> ${size}</p>
      <p><strong>Heard about us via:</strong> ${source}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
