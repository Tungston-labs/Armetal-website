import React,{useState} from 'react';
import {
  PageWrapper,
  Header,
 HamburgerIcon,MobileMenu,
 LogoWrapper,
  ContentWrapper,
} from './Privacy.Styles';
import Privacy2 from "./Privacy2"
import Privacy3 from "./Privacy3"
import { Link } from 'react-router-dom';
import Contact from "../../Components/Footer/Footer"
import { NavLink, NavLinks } from '../MainPage/Home.Styles';
import { Para, Paragraph, Paragraphs, SectionTitle, Title } from '../Terms/Terms.Styles';
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
<h4>We use your data to:</h4>
        <Para>
          Power Core HR Features: Like attendance tracking, payroll, performance reviews, and recruitment.<br></br>
          Simplify Onboarding: Bulk-upload employees, create accounts, and email login info automatically.<br>
          </br>Improve User Experience: Analyze feature use to enhance UI/UX, speed, and functionality.<br></br>
          Support You Better: Solve issues quickly and offer guidance when needed.
        </Para>
      </ContentWrapper>
    </PageWrapper>
    <Privacy2 />
    <Privacy3 />
    <Contact />
    </>
  );
};

export default Privacy;
