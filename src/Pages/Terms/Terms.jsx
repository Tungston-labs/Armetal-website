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

const TermsPage = () => {
  return (
    <PageWrapper>
      <Header>
  <LogoWrapper>
    <img src="/images/logos.png" alt="Rekory Logo" style={{ height: '90px' }} />
  </LogoWrapper>

  <NavLinks>
    <NavLink href="#">Home</NavLink>
    <NavLink href="#" active>Terms and Conditions</NavLink>
    <NavLink href="#">Privacy and Policy</NavLink>
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

        <SectionTitle>Authorized Use</SectionTitle>
        <Paragraph>
        You are granted a non-transferable, limited license to use Rekory for internal HR operations.<br></br>
        To comply with all relevant HR, employment, and data protection laws.<br></br>
       To enter only accurate and lawful data.
        </Paragraph>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default TermsPage;
