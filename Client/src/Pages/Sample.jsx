import React, { useState } from 'react';
import {
  Container,
  NavBar,
  Logo,Header,
  NavLinks,
  MobileMenuIcon,
  MobileNavLinks,
  HeroContent,NavLink,
  Title,LogoWrapper,
  SubTitle,SectionDescription,
  Description,
  CTAWrapper,
  AppButtonWhite,AppButtonBlack,
  HeroImage,
  MobileRow
} from './Sample.Styles';
import Mission from "./MainPage/Mission"
import { FiMenu, FiX } from 'react-icons/fi';
import Features from "./MainPage/Features"
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <Container>
        <Header>
        <LogoWrapper>
        <img
          src="/images/logos.png"
          alt="Rekory Logo"
          className="logo-image"
        />
      </LogoWrapper>
      
      
        <NavLinks>
  <NavLink to="/" as={Link} active>Home</NavLink>
  <NavLink to="/terms" as={Link} >Terms and Conditions</NavLink>
  <NavLink to="/privacy" as={Link}>Privacy and Policy</NavLink>
</NavLinks>
      </Header>
      

      <HeroContent>
        <div>
          <Title>
            The Future of High-End HRM Systems – <br />
            Unmatched UI/UX Friendly HR Software
          </Title>
          <SubTitle>Experience Unmatched HR Management with Rekory</SubTitle>
          <Description>
            Welcome to Rekory, the revolutionary Human Resources Management (HRM) system meticulously crafted for high-end organizations that demand excellence, efficiency, and unparalleled user experience. Rekory redefines modern HR software by blending sophisticated functionality with an intuitive, UI/UX friendly interface, making complex HR tasks effortlessly simple.
          </Description>

          {/* Mobile Layout */}
         <MobileRow>
  <CTAWrapper>
    <AppButtonBlack href="#">
      <img src="/images/play.png" alt="" /> Get it on <br></br>Google Play
    </AppButtonBlack>
    <AppButtonWhite href="#">
      <img src="/images/apple.png" alt="" /> Available on the <br></br>App Store
    </AppButtonWhite>
  </CTAWrapper>
  <HeroImage src="/images/hand.png" alt="Mobile App" />
</MobileRow>

{/* Desktop Buttons */}
<CTAWrapper className="desktop-only">
  <AppButtonBlack href="#">
    <img src="/images/play.png" alt="" /> Get it on <br></br>Google Play
  </AppButtonBlack>
  <AppButtonWhite href="#">
    <img src="/images/apple.png" alt="" /> Available on the<br></br> App Store
  </AppButtonWhite>
</CTAWrapper>

        </div>

        {/* Desktop Image */}
        <HeroImage className="desktop-only" src="/images/hand.png" alt="Mobile App" />
      </HeroContent>
     
    </Container>
     <SectionDescription>
              Rekory is a simple, user-friendly HR app available on both iOS and Android, making workforce management
              easy from anywhere. It offers everything from employee onboarding and performance tracking to advanced
              HR analytics—all in one place. Designed for modern teams, Rekory helps streamline HR tasks and boost
              productivity.
            </SectionDescription>
    <Mission />
    <Features />
    </>
  );
};

export default HeroSection;
