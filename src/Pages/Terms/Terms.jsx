import React from 'react';
import {
  FrameContainer,
  FirstImageContainer,
  ImageWrapper,
  OverlayText,
  SectionTitle,
  SectionParagraph,
  SectionBlock,
  ImageOnlyWrapper
} from './Terms.Styles';
import Sidebar from "../../Components/Sidebar/Sidebar"
import image1 from '../../../public/images/HOME.png';
// import image2 from '../../../public/images/sample.png';
// import image3 from '../../../public/images/HOME3.png';

const Terms = () => {
  return (
    <FrameContainer>

      <FirstImageContainer>
        <Sidebar />
        <ImageWrapper src={image1} alt="Background" />
        <OverlayText>
          <h1>Terms & Conditions – Rekory HRM App</h1>
          <SectionParagraph>
            These Terms govern your use of the Rekory HRM app and ensure a smooth, secure, and transparent HR management experience for your organization.
          </SectionParagraph>

          <SectionBlock>
            <SectionTitle>Acceptance of Terms</SectionTitle>
            <SectionParagraph>
              By registering and using Rekory, you agree to abide by these Terms and our Privacy Policy. If you do not accept them, please refrain from using the app.
            </SectionParagraph>
          </SectionBlock>

          <SectionBlock>
            <SectionTitle>Account Creation & Management</SectionTitle>
            <SectionParagraph>
              By registering and using Rekory, you agree to abide by these Terms and our Privacy Policy. If you do not accept them, please refrain from using the app.
            </SectionParagraph>
            <SectionParagraph>
              <strong>Security Responsibility:</strong> Your organization is responsible for managing user credentials and reporting any unauthorized access.
            </SectionParagraph>
          </SectionBlock>

          <SectionBlock>
            <SectionTitle>Authorized Use</SectionTitle>
            <SectionParagraph>
              You are granted a non-transferable, limited license to use Rekory for internal HR operations.
            </SectionParagraph>
          </SectionBlock>
        </OverlayText>
      </FirstImageContainer>

      {/* Other full-screen images */}
      {/* <ImageOnlyWrapper src={image2} alt="image 2" />
      <ImageOnlyWrapper src={image3} alt="image 3" /> */}
    </FrameContainer>
  );
};

export default Terms;
