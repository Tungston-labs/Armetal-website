import React, { useState } from "react";
import {
  ContactContainer,
  LeftColumn,
  RightColumn,
  Title,
  Paragraph,
  AppStoreButtons,
  Form,
  Row,
  Input,
  TextArea,
  SubmitButton,
  AppButton,
} from "./Contact.Styles";
import { GrSend } from "react-icons/gr";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import Swal from 'sweetalert2';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    size: "",
    source: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  Swal.fire({
    title: 'Sending...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  try {
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, formData);

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Your message has been sent successfully.',
      confirmButtonColor: '#3085d6',
    });

    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      size: "",
      source: "",
      message: "",
    });
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong while sending your message.',
      confirmButtonColor: '#d33',
    });
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <ContactContainer>
        <LeftColumn>
          <Title>Let’s Connect! We’re Here to Help<span>.</span></Title>
          <Paragraph>
            Whether you're looking for detailed information about our products and services,
            interested in collaboration, or just have a quick question—this is the place to start.
            Fill out the enquiry form below with your details and message, and a member of our team
            will get back to you promptly. We’re committed to providing timely and personalized
            responses to help you take the next step with confidence. Your inquiry matters to us,
            and we look forward to assisting you.
          </Paragraph>
          <h1 style={{ fontSize: "Reddit Sans" }}>Download the app now!</h1>
          <AppStoreButtons className="desktop-only">
            <AppButton href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="/images/play.png" alt="Get it on Google Play" />
              GET IT ON <br /> Google Play
            </AppButton>
            <AppButton href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="/images/App.png" alt="Available on the App Store" />
              Available on the <br /> App Store
            </AppButton>
          </AppStoreButtons>
        </LeftColumn>

        <RightColumn>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Input name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="off" placeholder="First Name" />
              <Input name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="off" placeholder="Last Name" />
            </Row>
            <Input name="company" value={formData.company} onChange={handleChange} autoComplete="off" placeholder="Company" />
            <Input name="email" value={formData.email} onChange={handleChange} autoComplete="off" placeholder="Company E-mail" />
            <Input name="size" value={formData.size} onChange={handleChange}autoComplete="off" placeholder="Company size" />
            <Input name="source" value={formData.source} onChange={handleChange} autoComplete="off" placeholder="How did you hear about REKORY" />
            <TextArea name="message" value={formData.message} onChange={handleChange} autoComplete="off" placeholder="Messages" rows={5} />
            
            <SubmitButton disabled={loading}>
              <GrSend style={{ marginRight: "5px" }} />
              {loading ? "Sending..." : "Send"}
            </SubmitButton>
          </Form>
        </RightColumn>
      </ContactContainer>

      <div style={{ height: "80px", backgroundColor: "#2C2C2C" }}></div>
      <Footer />
    </>
  );
};

export default ContactForm;
