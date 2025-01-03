import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Collapse, Stack, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactButtons = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    userEmail: "",
    subject: "",
    message: "",
    userName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("emailJS not correctly configured. Please contact the site admin");
      return;
    }

    emailjs
      .send(
        serviceId, // Replace with your EmailJS service ID
        templateId, // Replace with your EmailJS template ID
        formData,
        publicKey // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
          setFormData({
            userEmail: "",
            subject: "",
            message: "",
            userName: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  const whatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  if (!whatsAppNumber) {
    alert(
      "WhatsApp number not correctly configured. Please contact the site admin"
    );
    return;
  }

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Stack direction="row" spacing={2} justifyContent="center">
        {/* WhatsApp Button */}
        <Button
          variant="contained"
          color="success"
          href={`https://wa.me/${whatsAppNumber}`}
          target="_blank"
          startIcon={<WhatsAppIcon />}
          sx={{ textTransform: "none" }}
        >
          Contact via WhatsApp
        </Button>

        {/* Toggle Email Form Button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setIsFormOpen(!isFormOpen)}
          startIcon={<EmailIcon />}
          sx={{ textTransform: "none" }}
        >
          {isFormOpen ? "Close Email Form" : "Contact via Email"}
        </Button>
      </Stack>

      {/* Collapsible Email Form */}
      <Collapse in={isFormOpen} sx={{ mt: 2 }}>
        <Box
          component="form"
          id="contact"
          onSubmit={handleSubmit}
          sx={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}
        >
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Email"
            name="userEmail"
            id="userEmail"
            value={formData.userEmail}
            type="email"
            onChange={handleChange}
            required
            error={
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail) &&
              formData.userEmail !== ""
            }
            helperText={
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail) &&
              formData.userEmail !== ""
                ? "Please enter a valid email address"
                : ""
            }
          />
          <TextField
            fullWidth
            margin="normal"
            label="Subject"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            id="message"
            color="secondary"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            id="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ContactButtons;
