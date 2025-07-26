import React from 'react';
import {
  MissionVisionContainer,
  SectionDescription,
  StatementsGrid,
  StatementCard,
  CardTitle,
  CardText
} from './Mission.Styles';  

const MissionVisionSection = () => {
  return (
    <MissionVisionContainer >
      <SectionDescription>
        Rekory is a simple, user-friendly HR app available on both iOS and Android, making workforce management
        easy from anywhere. It offers everything from employee onboarding and performance tracking to advanced
        HR analytics—all in one place. Designed for modern teams, Rekory helps streamline HR tasks and boost
        productivity.
      </SectionDescription>

      <StatementsGrid>
        <StatementCard>
           <CardTitle>Vision Statement</CardTitle>
         
          <CardText>
            Our vision is to be the global standard for user-centric, efficient, and secure HR management
            solutions, transforming how organizations manage their human capital and setting a new benchmark for
            HRM innovation worldwide. We envision a future where HR processes are effortless and data is always
            protected.
          </CardText>
        </StatementCard>

        <StatementCard>
          <CardTitle>Mission Statement</CardTitle>
          <CardText>
            Our vision is to be the global standard for user-centric, efficient, and secure HR management
            solutions, transforming how organizations manage their human capital and setting a new benchmark for
            HRM innovation worldwide. We envision a future where HR processes are effortless and data is always
            protected.
          </CardText>
        </StatementCard>
      </StatementsGrid>
    </MissionVisionContainer>
  );
};

export default MissionVisionSection;