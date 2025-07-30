// components/TermsAndConditions.jsx
import React from "react";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Text,
} from "./Privacy2.Styles";

const Terms = () => {
  return (
    <Container>
 <Section>
        <SectionTitle>Where & How We Store It</SectionTitle>
        <Text> In-House Data Storage: All your data is stored in Rekory's own secure facilities — no third-party cloud services.<br></br>
          Zero Data Sharing: We never sell, rent, or share your data. Period.<br></br>
          <strong>Our security measures include :</strong><br></br>
          24/7 surveillance and strict physical access to our data centers.<br></br>
          Firewalls and network protection to block cyber threats. <br></br>
          Bank-grade AES-256 encryption for all data, in transit and at rest.<br></br>
          Role-based internal access with full monitoring.<br></br>
          Regular security audits and backup protocols.<br></br></Text>
       
      </Section>

 <Section>
        <SectionTitle>Your Rights</SectionTitle>
        <Text> Access & Update: View and edit your data anytime within the app.<br></br>
Portability: Request a downloadable copy of your data.<br></br>
 Delete: You can ask to delete your account, subject to legal requirements.</Text>
       
      </Section>

      <Section>
        <SectionTitle>Intellectual Property</SectionTitle>
        <Text>All content, technology, and designs within Rekory are the sole property of Rekory. Reproduction or redistribution is 
          <br></br> prohibited without permission.</Text>
       
      </Section>
      
      {/* <Section>
        <SectionTitle>Subscriptions & Billing</SectionTitle>
        <Text>
          Plans & Pricing – Access to Rekory requires a paid subscription based
          on your chosen plan.
        </Text>
        <Text>
          Payments – Subscription fees must be paid in full and on time.
        </Text>
        <Text>
          Account Suspension – Failure to comply may result in suspended access.
        </Text>
      </Section> */}

      {/* <Section>
        <SectionTitle>Service Limitations</SectionTitle>
        <Text>
          Rekory is provided “as is.” While we strive for reliability, we do not
          guarantee uninterrupted service and are not liable for indirect or
          incidental losses.
        </Text>
      </Section>  */}

   {/* <Section>
        <SectionTitle>Your Responsibility</SectionTitle>
        <Text>
          You agree to indemnify Rekory against any legal claims arising from
          misuse of the app or violation of the terms.
        </Text>
      </Section> */}

      {/* <Section>
        <SectionTitle>Jurisdiction</SectionTitle>
        <Text>These Terms are governed by the laws of the country/state where Rekory is registered. Legal disputes will be resolved in <br></br> the applicable jurisdiction..</Text>
 </Section> */}
     

     {/* <Section>
        <SectionTitle>Updates to Terms</SectionTitle>
        <Text>We reserve the right to modify these Terms at any time. You’ll be notified in advance of any significant updates.</Text>
 </Section> */}
    </Container>
  );
};

export default Terms;
