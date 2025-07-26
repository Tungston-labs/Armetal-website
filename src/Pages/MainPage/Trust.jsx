import React from "react";
import {
  Container,
  Title,
  LogosWrapper,
  LogoImage,
  Description
} from "./Trust.Styles";
import Contact from "../MainPage/Contact"
// Replace with actual image paths
import logo from "../../assets/logo.svg";
import msp from "../../assets/msp.svg";
// import logo3 from "../../assets/logo3.svg";
import stampede from "../../assets/stampede.svg";
import thijara from "../../assets/thijara.svg";

const logos = [logo, msp, , stampede, thijara];

const TrustedSection = () => {
  return (
    <>
    <Container>
      <Title>
        Trusted by <br />
        Growing Teams & <br />
        Enterprises Alike
      </Title>

      <LogosWrapper>
        {logos.map((logo, idx) => (
          <LogoImage key={idx} src={logo} alt={`Logo ${idx + 1}`} />
        ))}
      </LogosWrapper>

      <Description>
        Rekory isn’t just an HR tool—it’s your complete HR command center. From
        recruitment to retirement, every feature is designed to save time,
        reduce manual work, and boost team productivity. With a sleek interface,
        powerful automation, and enterprise-level flexibility, Rekory transforms
        complex HR tasks into effortless workflows—helping your business grow
        faster, smarter, and stronger.
      </Description>
    </Container>
    <Contact />
    </>
  );
};

export default TrustedSection;
