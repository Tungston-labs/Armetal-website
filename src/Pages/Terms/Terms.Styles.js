import styled from 'styled-components';

export const PageWrapper = styled.div`
  // min-height: 100vh;
  color: #fff;
  background-image: url('/images/HOME.png');
  background-size: cover;
  // background-position: center;
  background-repeat: no-repeat;
    // height:100vh;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-left: 10%;

  img {
    height: 150px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 10px;

    img {
      height: 100px; // smaller logo for mobile
    }
  }
`;



export const NavLinks = styled.nav`
  display: flex;
  gap: 50px;
  color: black;
  align-items: center;          
  justify-content: center;       
  background-color: white;
  width: 50%;
  height: 50px;
  position: absolute;           
  right: 0;                     
  top: 10;                        

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    position: static;
  }
`;

export const NavLink = styled.a`
  color: black;
  text-align: center;
  font-size: 25px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export const ContentWrapper = styled.div`
  margin-top: 40px;
  // max-width: 900px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
  text-align: center;
justify-content:center;
  @media (max-width: 768px) {
    font-size: 30px
`;

export const SectionTitle = styled.h3`
  font-size: 35px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 25PX;
  }
`;

export const Paragraphs = styled.p`
  font-size: 32px;
  align-item:center;
  text-align: center;
  margin-top:30px;
  margin: 4px 0;
  justify-content:center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20PX;
  }
`;
export const Paragraph = styled.p`
  font-size: 30px;
 font-weight: 300;
  margin-bottom: 10px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Para = styled.p`
  font-size: 30px;
 font-weight: 300;
  margin-bottom: 10px;
  // line-height: 1.6;
  @media (max-width: 768px) {
     font-size: 20px;
  }
    `;