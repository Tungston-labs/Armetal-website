import React, { useState } from 'react';
import {
  Container,
  NavBar,
  Logo,
  NavLinks,
  MobileMenuIcon,
  MobileNavLinks,
  HeroContent,
  Title,
  SubTitle,
  Description,
  CTAWrapper,
  AppButtonWhite,AppButtonBlack,
  HeroImage,
  MobileRow
} from './Sample.Styles';
import Mission from "../Pages/MainPage/Mission"
import { FiMenu, FiX } from 'react-icons/fi';
import Features from "../Pages/MainPage/Features"
const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <Container>
      <NavBar>
        <Logo src="/images/logos.png" alt="Rekory Logo" />
        
        {/* Desktop Nav */}
        <NavLinks>
          <a href="#">Home</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy and Policy</a>
        </NavLinks>

        {/* Hamburger Icon */}
        <MobileMenuIcon onClick={toggleMenu}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuIcon>
      </NavBar>

      {/* Mobile Dropdown Menu */}
      <MobileNavLinks isOpen={isMobileMenuOpen}>
        <a href="#">Home</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy and Policy</a>
      </MobileNavLinks>

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
    <Mission />
    <Features />
    </>
  );
};

export default HeroSection;
