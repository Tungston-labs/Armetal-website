import styled from "styled-components";

export const Container = styled.div`
  background: #2c2c2c;
  color: white;
  padding: 60px 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 80px 60px;
  }

  
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
//   margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
     @media (min-width: 768px) {
    // padding: 80px 60px;
    font-size:35px;
  }
`;

export const LogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  margin-top:-10%;


  @media (max-width: 480px) {
 margin-top:20px;
  }
  @media (min-width: 768px) {
    // padding: 80px 60px;
    margin-left:18%;
    margin-top:-20px;
  }
`;

export const LogoImage = styled.img`
  height: 80px;
  object-fit: contain;

  @media (max-width: 480px) {
    height: 40px;
  }
     @media (min-width: 768px) {
    // padding: 80px ;
    
  }
`;

export const Description = styled.p`
  max-width: 900px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 10px;
  }
     @media (min-width: 768px) {
    // padding: 80px;
  }
`;
