// components/TermsAndConditions.jsx
import React from "react";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Text,
} from "./Terms2.Styles";

const TermsAndConditions = () => {
  return (
    <Container>


      <Section>
        <SectionTitle>Data Protection Commitment</SectionTitle>
        <Text>Rekory stores your data solely on private servers.</Text>
        <Text>We do not share your information with third parties.</Text>
        <Text>All data is safeguarded with industry-leading security.</Text>
      </Section>

      <Section>
        <SectionTitle>Data Protection Commitment</SectionTitle>
        <Text>Rekory stores your data solely on private servers.</Text>
        <Text>We do not share your information with third parties.</Text>
        <Text>All data is safeguarded with industry-leading security.</Text>
      </Section>

      <Section>
        <SectionTitle>Intellectual Property</SectionTitle>
        <Text>
          All content, technology, and designs within Rekory are the sole
          property of Rekory. Reproduction or redistribution is prohibited
          without permission.
        </Text>
      </Section>

      <Section>
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
      </Section>

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
    </Container>
  );
};

export default TermsAndConditions;
