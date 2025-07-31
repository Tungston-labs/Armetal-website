import React,{useState} from 'react';
import {
  PageWrapper,
  Header,Para,
  NavLinks,HamburgerIcon,MobileMenu,
  NavLink,LogoWrapper,
  ContentWrapper,
  Title,Paragraphs,
  Paragraph,
  SectionTitle
} from './Privacy.Styles';
import Privacy2 from "./Privacy2"
import Privacy3 from "./Privacy3"
import { Link } from 'react-router-dom';
import Contact from "../../Components/Footer/Footer"
const Privacy = () => {
       const [isOpen, setIsOpen] = useState(false);
  
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
 <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
        ☰
      </HamburgerIcon>

 <NavLinks>
  <NavLink to="/" as={Link}>Home</NavLink>
  <NavLink to="/terms" as={Link} >Terms and Conditions</NavLink>
  <NavLink to="/privacy" as={Link} active>Privacy and Policy</NavLink>
</NavLinks>
{isOpen && (
        <MobileMenu>
          <NavLink to="/" as={Link} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/terms" as={Link} onClick={() => setIsOpen(false)}>Terms and Conditions</NavLink>
          <NavLink to="/privacy" as={Link} onClick={() => setIsOpen(false)}>Privacy and Policy</NavLink>
        </MobileMenu>
 )}
</Header>


      <ContentWrapper>
        <Title>Privacy Policy for Rekory: Your Data, Fully Secured, Never Shared</Title>
        <Paragraphs>
         At Rekory, we value your trust. This Privacy Policy explains how we collect, use, and safeguard your data when you use
         our Human Resource Management (HRM) app, available on iOS and Android. Our core promise: your data stays private 
         and secure — always stored in our own facilities, never shared with third parties.
        </Paragraphs>

        <SectionTitle>What We Collect</SectionTitle>
        
        <Paragraph>
          To deliver a seamless HR experience, we collect:<br></br>
          Employee Data: Names, contact info, job roles, history, leave and attendance records, salaries, and performance data.
          Organizational Info: Details about your departments, company structure, and internal HR settings.
          App Usage Data: Features used, time spent, and system feedback — all anonymized to improve your experience.
         Login Credentials: Secure usernames and encrypted passwords for safe access.
        </Paragraph>

        <SectionTitle>Why We Collect It</SectionTitle>
<h1>We use your data to:</h1>
        <Para>
          Power Core HR Features: Like attendance tracking, payroll, performance reviews, and recruitment.<br></br>
          Simplify Onboarding: Bulk-upload employees, create accounts, and email login info automatically.<br>
          </br>Improve User Experience: Analyze feature use to enhance UI/UX, speed, and functionality.<br></br>
          Support You Better: Solve issues quickly and offer guidance when needed.
        </Para>

     {/* <SectionTitle>Where & How We Store It</SectionTitle>
        <Paragraph>
          In-House Data Storage: All your data is stored in Rekory's own secure facilities — no third-party cloud services.<br></br>
          Zero Data Sharing: We never sell, rent, or share your data. Period.<br></br>
          <strong>Our security measures include :</strong><br></br>
          24/7 surveillance and strict physical access to our data centers.<br></br>
          Firewalls and network protection to block cyber threats. <br></br>
          Bank-grade AES-256 encryption for all data, in transit and at rest.<br></br>
          Role-based internal access with full monitoring.<br></br>
          Regular security audits and backup protocols.<br></br>
        </Paragraph> */}

        {/* <SectionTitle>Your Rights</SectionTitle>
        <Paragraph>
       Access & Update: View and edit your data anytime within the app.<br></br>
Portability: Request a downloadable copy of your data.<br></br>
 Delete: You can ask to delete your account, subject to legal requirements.
        </Paragraph> */}

        
      </ContentWrapper>
    </PageWrapper>
    <Privacy2 />
    <Privacy3 />
    <Contact />
    </>
  );
};

export default Privacy;
