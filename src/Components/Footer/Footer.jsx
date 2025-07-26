import React from 'react';
import {
  FooterWrapper,
  FooterContent,
  Logo,
  NavLinks,
  NavItem,
  ContactSection,
  ContactItem,
  FooterNote,
  Icon,
  BottomCurve,
} from './Footer.Styles';

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Logo src="/images/logos.png" alt="REKORY Logo" />
        <NavLinks>
          <NavItem>Home</NavItem>
          <NavItem>Terms and Conditions</NavItem>
          <NavItem>Privacy and Policy</NavItem>
        </NavLinks>

        <ContactSection>
          <ContactItem>
            <Icon><FaEnvelope /></Icon>
            Email: support@ARM.com
          </ContactItem>
          <ContactItem>
            <Icon><FaPhoneAlt /></Icon>
            +971 555736021
          </ContactItem>
          <ContactItem>
            <Icon><FaMapMarkerAlt /></Icon>
            Tungston Labs, Ullampilly Building, 4th Floor,<br />
            Seaport - Airport Rd, behind Olimugal Juma Masjid,<br />
            Thrikkakara, Vazhakkala, Kakkanad, Kochi, Kerala 682030
          </ContactItem>
        </ContactSection>
      </FooterContent>

      <FooterNote>
        © Copyright 2025, <strong>REKORY</strong>. Designed by <strong>Tungston Labs</strong>.
      </FooterNote>

      <BottomCurve />
    </FooterWrapper>
  );
};

export default Footer;
