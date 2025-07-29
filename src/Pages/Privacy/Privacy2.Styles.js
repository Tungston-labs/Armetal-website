// components/TermsAndConditions.styles.js
import styled from "styled-components";

export const Container = styled.div`
  // max-width: 900px;
  margin: 0 auto;
  padding: 30px ;
  color: white;
  // height:100vh;
  background-image: url('/images/sample.png');
 background-repeat: no-repeat;
    // background-attachment: fixed;
    background-size: cover;

 @media (max-width: 768px) {
    padding: 15px;
  }

    
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Section = styled.div`
  margin-bottom: 0px;
  padding: 20px;
// margin-top:10px;
    @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SectionTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 20px;
  color: #FFF;
font-family: "Reddit Sans";
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;

  @media (max-width: 768px) {
    font-size: 25PX;
  }
`;

export const Text = styled.p`
  margin: 4px 0;
  // line-height: 1.6;
  color: #FFF;

font-family: Lato;
font-size: 32px;
font-style: normal;
font-weight: 300;
line-height: normal;

@media (max-width: 768px) {
    font-size: 20PX;
  }
`;
