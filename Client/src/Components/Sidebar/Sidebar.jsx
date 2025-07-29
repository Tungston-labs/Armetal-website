import React from "react";
import {
  PageContainer,
  NavBar,
  Logo,
  NavList,
  NavItem,
  // Title,
  // Subtitle
} from "./Sidebar.Styles";

const TermsAndConditions = () => {
  return (
    <PageContainer>
      <NavBar>
        <Logo src="/images/logos.png" alt="Rekory Logo" />
        <NavList>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#" $active>
            Terms and Conditions
          </NavItem>
          <NavItem href="#">Privacy and Policy</NavItem>
        </NavList>
      </NavBar>

      {/* <Title>Terms and Conditions</Title>
      <Subtitle>
        These Terms and Conditions govern your use of our website. By accessing or using the website, you agree to be bound by these terms.
      </Subtitle> */}
    </PageContainer>
  );
};

export default TermsAndConditions;
