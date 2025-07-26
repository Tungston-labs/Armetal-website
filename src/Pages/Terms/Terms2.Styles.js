// components/TermsAndConditions.styles.js
import styled from "styled-components";

export const Container = styled.div`
//   max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  color: white;
  background-image: url('/images/sample.png');
//   background: linear-gradient(to bottom right, #1a237e, #0d47a1);
//   border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin: 4px 0;
  line-height: 1.6;
`;
