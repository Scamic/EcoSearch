import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    const googleScriptURL = "https://script.google.com/macros/s/AKfycbwALzkcyeFzZtFI_yd5VwhA6PXi5AtaELHzR_30-LJlzF3KXcCN6a0zLq2e9VyJLg2J/exec"; // Replace with actual URL

    const response = await fetch(googleScriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to save email to google docs");
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password, not actual password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to the Waitlist!",
      html: `<p>Thanks for joining our waitlist! We'll keep you updated.</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
