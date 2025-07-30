import React from 'react';
import {
  PageWrapper,
  Header,Para,
  NavLinks,
  NavLink,LogoWrapper,
  ContentWrapper,
  Title,Paragraphs,
  Paragraph,
  SectionTitle
} from './Terms.Styles';
import Terms2 from "./Terms2"
import Terms3 from './Terms3';
import { Link } from 'react-router-dom';
import Contact from "../../Components/Footer/Footer"
const TermsPage = () => {
  return (
  <>
    <PageWrapper>
      <Header>
  <LogoWrapper>
  <img
    src="/images/logos.png"
    alt="Rekory Logo"
    className="logo-image"
  />
</LogoWrapper>


<NavLinks>
  <NavLink to="/" as={Link}>Home</NavLink>
  <NavLink to="/terms" as={Link} active>Terms and Conditions</NavLink>
  <NavLink to="/privacy" as={Link}>Privacy and Policy</NavLink>
</NavLinks>
</Header>


      <ContentWrapper>
        <Title>Terms & Conditions – Rekory HRM App</Title>
        <Paragraphs>
          These Terms govern your use of the Rekory HRM app and ensure a <br></br>smooth, secure, and transparent
          HR management experience for<br></br> your organization.
        </Paragraphs>

        <SectionTitle>Acceptance of Terms</SectionTitle>
        <Paragraph>
          By registering and using Rekory, you agree to abide by these Terms and our Privacy Policy. If
          you do not accept them,<br></br> please refrain from using the app.
        </Paragraph>

        <SectionTitle>Account Creation & Management</SectionTitle>
        <Para>
          By registering and using Rekory, you agree to abide by these Terms and our Privacy Policy. If
          you do not accept them, <br></br>please refrain from using the app.
        </Para>

        <Paragraph>
          <strong>Security Responsibility</strong> – Your organization is responsible for managing user credentials and
          reporting any unauthorized <br></br>access.
        </Paragraph>

        
      </ContentWrapper>
    </PageWrapper>
    <Terms2 />
    <Terms3 />
    <Contact />
    </>
  );
};

export default TermsPage;
