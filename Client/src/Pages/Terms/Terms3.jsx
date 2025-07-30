// components/TermsAndConditions.jsx
import React from "react";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Text,
} from "./Terms3.Styles";

const Terms = () => {
  return (
    <Container>


       <Section>
        <SectionTitle>Service Limitations</SectionTitle>
        <Text>
          Rekory is provided “as is.” While we strive for reliability, we do not
          guarantee uninterrupted service and are not liable for indirect or
          incidental losses.
        </Text>
      </Section>  

   <Section>
        <SectionTitle>Your Responsibility</SectionTitle>
        <Text>
          You agree to indemnify Rekory against any legal claims arising from
          misuse of the app or violation of the terms.
        </Text>
      </Section> 

       <Section>
        <SectionTitle>Jurisdiction</SectionTitle>
        <Text>These Terms are governed by the laws of the country/state where Rekory is registered. Legal disputes will be resolved in <br></br> the applicable jurisdiction..</Text>
 </Section> 
     

     <Section>
        <SectionTitle>Updates to Terms</SectionTitle>
        <Text>We reserve the right to modify these Terms at any time. You’ll be notified in advance of any significant updates.</Text>
 </Section>
    </Container>
  );
};

export default Terms;
