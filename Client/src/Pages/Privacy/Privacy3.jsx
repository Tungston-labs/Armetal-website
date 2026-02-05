import React from "react";
import {
  Container,
  Title,
  Section,
} from "./Privacy3.Styles";
import { SectionTitle } from "../Terms/Terms.Styles";
import { Text } from "../Terms/Terms2.Styles";

const Terms = () => {
  return (
    <Container>

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

      <Section>
        <SectionTitle>Jurisdiction</SectionTitle>
        <Text>These Terms are governed by the laws of the country/state where Rekory is registered. Legal disputes will be resolved in <br></br> the applicable jurisdiction..</Text>
      </Section>

      <Section>
        <SectionTitle>Updates to Terms</SectionTitle>
        <Text>We reserve the right to modify these Terms at any time. You’ll be notified in advance of any significant updates.</Text>
      </Section>
      <Section>
        <SectionTitle>Location Data - For Attendance & Field Tracking </SectionTitle>
        <Text>When enabled by the organization, Rekory may collect employee location data,
          including background location access, to support attendance verification and field workforce tracking.
          This data is used exclusively to confirm employee presence within approved work locations through
          geo-fencing, particularly for onsite and field-based roles. Location information is accessible only
          to authorized administrators and is not shared with third parties.</Text>
      </Section>
    </Container>
  );
};

export default Terms;
