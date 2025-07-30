import React from 'react';
import {
  TrustedContainer,
  HeadingWrapper,
  Heading,
  LogosWrapper,
  LogoItem,
  LogoImage,
  Description,
} from './Trust.Styles';

import tungston from '../../assets/logo.svg';
import stampede from '../../assets/stampede.svg';
import thijara from '../../assets/thijara.svg';
import msp from '../../assets/msp.svg';

const TrustedSection = () => {
  return (
    <>
    <TrustedContainer>
      <HeadingWrapper>
        <Heading>
          Trusted by  Growing Teams <br /> & Enterprises Alike
        </Heading>
      </HeadingWrapper>

      <LogosWrapper>
        <LogoItem><LogoImage src={tungston} alt="Tungston" /></LogoItem>
        <LogoItem><LogoImage src={msp} alt="MSP" /></LogoItem>
        <LogoItem><LogoImage src={stampede} alt="Stampede" /></LogoItem>
        <LogoItem><LogoImage src={thijara} alt="Thijara" /></LogoItem>
      </LogosWrapper>
</TrustedContainer>
      <Description>
        Rekory isn’t just an HR tool—it’s your complete HR command center. From recruitment to retirement, every feature is designed to save time, reduce manual work, and boost team productivity. With a sleek interface, powerful automation, and enterprise-level flexibility, Rekory transforms complex HR tasks into effortless workflows—helping your business grow faster, smarter, and stronger.
      </Description>
    
    </>
  );
};

export default TrustedSection;
