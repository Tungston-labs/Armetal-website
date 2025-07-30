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
  margin-left: 1%;

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
  height: 70px;
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
    color: #273F8F;
    font-weight:700;
      font-family: "Reddit Sans";
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
  font-size: 2.56rem;
  margin-bottom: 20px;
font-family: "Reddit Sans";

  text-align: center;
justify-content:center;
  @media (max-width: 768px) {
    font-size: 2rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 20px;
font-family: "Reddit Sans";
  @media (max-width: 768px) {
    font-size: 25PX;
  }
`;

export const Paragraphs = styled.p`
  font-size: 1.8rem;
  align-item:center;
  text-align: center;
  margin-top:30px;
  margin: 4px 0;
  justify-content:center;
  margin-bottom: 10px;
color: #FFF;
text-align: center;
font-family: Lato;
font-style: normal;
font-weight: 400;
// line-height: normal;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.5rem;
 font-weight: 300;
  margin-bottom: 10px;
  // line-height: 1.6;
  font-family: Lato;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Para = styled.p`
  font-size: 1.5rem;
 font-weight: 300;
  margin-bottom: 10px;
  font-family: Lato;
  // line-height: 1.6;
  @media (max-width: 768px) {
     font-size: 1.2rem;
  }
    `;