import React from 'react';
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Subtitle,
  Description,
  AppStoreButtons,
  AppButton,
  ImageWrapper,
  PhoneImage,
  MobileOnlyRowWrapper,
  MobileImageWrapper,
  DesktopImageWrapper,
} from './Home.Styles';
import Mission from './Mission';

const HeroSection = () => {
  return (
    <div>
      <HeroContainer>
        <ContentWrapper>
          <Title>The Future of High-End HRM Systems – Unmatched UI/UX Friendly HR Software</Title>
          <Subtitle>Experience Unmatched HR Management with Rekory</Subtitle>
          <Description>
            Welcome to Rekory, the revolutionary Human Resources Management (HRM) system meticulously crafted for high-end organizations that demand excellence, efficiency, and unparalleled user experience. Rekory redefines modern HR software by blending sophisticated functionality with an intuitive, UI/UX friendly interface, making complex HR tasks effortlessly simple
          </Description>

          {/* ✅ This row only appears on small screens */}
          <MobileOnlyRowWrapper>
            <AppStoreButtons>
              <AppButton href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="/google-play-icon.png" alt="Get it on Google Play" />
                GET IT ON <br /> Google Play
              </AppButton>
              <AppButton href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src="/app-store-icon.png" alt="Available on the App Store" />
                Available on the <br /> App Store
              </AppButton>
            </AppStoreButtons>
            <MobileImageWrapper>
              <PhoneImage src="/images/hand.png" alt="Rekory Mobile App Screenshot" />
            </MobileImageWrapper>
          </MobileOnlyRowWrapper>

          {/* ✅ Regular buttons (visible on large screen) */}
          <AppStoreButtons className="desktop-only">
            <AppButton href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="/google-play-icon.png" alt="Get it on Google Play" />
              GET IT ON <br /> Google Play
            </AppButton>
            <AppButton href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="/app-store-icon.png" alt="Available on the App Store" />
              Available on the <br /> App Store
            </AppButton>
          </AppStoreButtons>
        </ContentWrapper>

        {/* ✅ Desktop image only */}
        <DesktopImageWrapper>
          <PhoneImage src="/images/hand.png" alt="Rekory Mobile App Screenshot" />
        </DesktopImageWrapper>
      </HeroContainer>

      <Mission />
    </div>
  );
};

export default HeroSection;
