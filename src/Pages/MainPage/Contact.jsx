import React from "react";
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
import Footer from "../../Components/Footer/Footer";
const ContactForm = () => {
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
        <h4>Download the app now!</h4>
    <AppStoreButtons  className="desktop-only">
                <AppButton href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <img src="/images/play.png" alt="Get it on Google Play" />
                  GET IT ON <br /> Google Play
                </AppButton>
                <AppButton href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/apple.png" alt="Available on the App Store" />
                  Available on the <br /> App Store
                </AppButton>
              </AppStoreButtons>

      </LeftColumn>

      <RightColumn>
        <Form>
          <Row>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
          </Row>
          <Input type="text" placeholder="Company" />
          <Input type="email" placeholder="Company E-mail" />
          <Input type="text" placeholder="Company size" />
          <Input type="text" placeholder="How did you hear about REKORY" />
          <TextArea placeholder="Messages" rows={5} />
          <SubmitButton>
            ✈️ Send
          </SubmitButton>
        </Form>
      </RightColumn>
    </ContactContainer>
    <div style={{height:"80px", backgroundColor:"#2C2C2C"}}></div>
    <Footer/>
    </>
  );
};

export default ContactForm;
