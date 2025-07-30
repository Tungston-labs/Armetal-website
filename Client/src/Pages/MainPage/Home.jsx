// src/components/HeroSection.jsx
import React from 'react';
import {
  HeroContainer,
  // NavBar,
  Header,
  LogoWrapper,
  NavLink,
  ContentWrapper,
  LeftContent,
        NavLinks,
  Heading,
  SubHeading,
  Description,
    Descriptions,
  ButtonGroup,
  Title,
  MissionVisionContainer,
  StatementCard,
  CardRow,
   StoreButton,
  RightImageWrapper,
  MobileImage, InfoSection, InfoText
} from './Home.Styles';
import Features from "./Features"
import Contact from "./Contact"
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <>
    <HeroContainer>
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

      <ContentWrapper>
        <LeftContent>
          <Heading>The Future of High-End HRM Systems –
          Unmatched UI/UX Friendly HR Software</Heading>
           <SubHeading>Experience Unmatched HR Management with Rekory
         </SubHeading>
          <Description>
            Welcome to Rekory, the revolutionary Human Resources Management (HRM) system meticulously crafted for high-end organizations that demand excellence, efficiency, and unparalleled user experience. Rekory redefines modern HR software by blending sophisticated functionality with an intuitive, UI/UX friendly interface, making complex HR tasks effortlessly simple.
          </Description>
          <ButtonGroup>
            <StoreButton 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
            <StoreButton
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </ButtonGroup>
        </LeftContent>

        <RightImageWrapper>
          <MobileImage src="/images/hand.png" alt="Mobile App" />
        </RightImageWrapper>
      </ContentWrapper>
    </HeroContainer>
     <InfoSection>
      <InfoText>
        Rekory is a simple, user-friendly HR app available on both iOS and Android, making workforce management easy from anywhere.
        It offers everything from employee onboarding and performance tracking to advanced HR analytics—all in one place.
        Designed for modern teams, Rekory helps streamline HR tasks and boost productivity.
      </InfoText>
    </InfoSection>
       <MissionVisionContainer>
      <CardRow align="right">
        <StatementCard>
          <Title>Vision Statement</Title>
          <Descriptions>
            Our vision is to be the global standard for user-centric, efficient, and secure HR management solutions,
            transforming how organizations manage their human capital and setting a new benchmark for HRM innovation worldwide.
            We envision a future where HR processes are effortless and data is always protected.
          </Descriptions>
        </StatementCard>
      </CardRow>
      <CardRow align="left">
        <StatementCard top="top">
          <Title>Mission Statement</Title>
          <Descriptions>
            Our mission is to be the global standard for user-centric, efficient, and secure HR management solutions,
            transforming how organizations manage their human capital and setting a new benchmark for HRM innovation worldwide.
            We envision a future where HR processes are effortless and data is always protected.
          </Descriptions>
        </StatementCard>
      </CardRow>
    </MissionVisionContainer>
    <Features />
        <Contact />
    </>
  );
};

export default HeroSection;
