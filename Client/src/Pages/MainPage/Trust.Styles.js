import styled from 'styled-components';

export const TrustedContainer = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #2C2C2C;
  display: flex;
  // flex-direction: column;
  // align-items: center;
  // text-align: center;

   @media (max-width: 768px) {
    flex-direction: column; // stack heading above logos on mobile
    text-align: center;
  }
`;

export const HeadingWrapper = styled.div`
  // width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-family:Reddit Sans ;
  // font-weight: 600;
  line-height: 1.4;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const LogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 576px) {
    gap: 30px;
  }
`;

export const LogoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 160px;
  width: 100%;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: brightness(1.1);
`;

export const Description = styled.p`
  // max-width: 900px;
  background-color: #2C2C2C;
  font-size: 1.5rem;
  color: white;
  
  line-height: 1.6;
  text-align: center;
    align-items: center;
font-family: Lato;
   @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;


