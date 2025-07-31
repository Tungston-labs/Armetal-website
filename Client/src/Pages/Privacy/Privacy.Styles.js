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
    margin-top: 25px;
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
  align-items: center;           // vertically center items
  justify-content: center;       // horizontally center items inside the navbar
  background-color: white;
  width: 50%;
  height: 70px;
  position: absolute;            // place on right side
  right: 0;                      // align to the right
  top: 10;                        // stick to top (optional)

  @media (max-width: 768px) {
   display:none;
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

   @media (max-width: 768px) {
     font-size: 12px;
     
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
  text-align: center;
  color: #FFF;
text-align: center;
font-family: "Reddit Sans";
// font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: normal;
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
    font-size: 1.4rem;
  }
`;

export const Paragraphs = styled.p`
  font-size: 1.6rem;
  align-item:center;
  text-align: center;
  margin-top:30px;
  margin: 4px 0;
  justify-content:center;
  margin-bottom: 10px;
color: #FFF;
font-family: Lato;
// font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.5rem;
 font-weight: 300;
  margin-bottom: 10px;
  // line-height: 1.6;
  color: #FFF;
font-family: Lato;
// font-size: 32px;
font-style: normal;
// font-weight: 400;
// line-height: normal;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Para = styled.p`
  font-size: 1.5rem;
 font-weight: 300;
  margin-bottom: 10px;
  // line-height: 1.6;
  color: #FFF;
font-family: Lato;
// font-size: 32px;
font-style: normal;
// font-weight: 400;
// line-height: normal;
  @media (max-width: 768px) {
     font-size: 1.2rem;
  }
    `;

     export const HamburgerIcon = styled.div`
  display: none;
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 1001;
  cursor: pointer;
  color: #white;

  @media (max-width: 768px) {
    display: block;j
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15px 0;
  z-index: 1000;
  
  @media (min-width: 769px) {
    display: none;
  }
`;