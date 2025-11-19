// src/components/Home.Styles.js
import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  // background: linear-gradient(to bottom, #001a4d, #002366);
    background-image: url('/images/HOME.png'); /* place in public/images/HOME.png */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  padding: 20px 40px;

  @media (max-width: 768px) {
    padding: 20px;
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
    margin-top: 20px;
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
  display:none;
  }
`;

export const NavLink = styled.a`
  color: black;
  text-align: center;
  font-size: 24px;
    color: #273F8F;
    font-weight:700;
      font-family: "Reddit Sans";
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
     @media (max-width: 1440px) {
     font-size: 1.2rem;    
   }
  @media (max-width: 1024px) {
     font-size: 1rem;    
   }
   @media (max-width: 768px) {
     font-size: 12px;    
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
  color: white;

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
// export const Logo = styled.img`
//   height: 8rem;
//   width: auto;
// `;

// export const NavLinks = styled.nav`
//   display: flex;
//   gap: 2rem;
// background:white;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//     margin-top: 1rem;
//   }
// `;

// export const NavLink = styled.a`
//   color: black;
//   text-decoration: none;
//   font-size: 1rem;

//   &:hover {
//     text-decoration: underline;
//   }
// `;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  margin-top:5%;
  // padding-top: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: left;
    gap: 40px;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  padding-right: 50px;

  @media (max-width: 1024px) {
    padding-right: 0;
  }
`;

export const Heading = styled.h1`
  font-size: 2.56rem;
  font-weight: bold;
  margin-bottom: 10px;
font-family: "Reddit Sans";

 @media (max-width: 1440px) {
    font-size: 1.8rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  // @media (max-width: 360px) {
  //   font-size: 1.6rem;
  // }
`;



export const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 20px;
font-family: "Reddit Sans";

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
      @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 30px;
  font-family: "Lato";

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px)and (max-width:1023px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) and (max-width:1439px) {
    font-size: 1.2rem;
  }

`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StoreButton = styled.img`
  height: 60px;
  cursor: pointer;

  @media (max-width: 768px) {
      height: 50px;
  }
    @media (max-width: 480px) {
      height: 40px;
  }
`;

export const RightImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const MobileImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top:-10%;
  object-fit: contain;
`;
export const InfoSection = styled.section`
  background-color: #242424;
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 200px;
  margin-top:-20px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const InfoText = styled.p`
  max-width: 1200px;
  font-size: 1.4rem;
  // line-height: 1.7;
  font-weight: 400;
font-family: "Reddit Sans";

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const MissionVisionContainer = styled.section`
  width: 100%;
  // min-height: 100vh;
  background-image: url('/images/mission.png'); // Replace with your background
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
   @media (max-width: 768px) {
      gap: 3rem;


  }
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) =>
    align === 'right' ? 'flex-end' : 'flex-start'};
  width: 100%;
padding-inline:5rem;
  @media (max-width: 768px) {
    justify-content: center;
    padding-inline:0px;

  }
`;

export const StatementCard = styled.div`
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 4rem;
  width: 47%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
         margin-top: ${({ top }) => (top === 'top' ? '-40px' : '0')};

  &:hover {
    transform: translateY(-5px);
    background-color:white;
    color:darkblue;
  }
    @media (max-width: 1024px) {
    padding: 1rem;
    width:60%;
    margin-top:15px;
  }
@media (max-width: 768px) {
    padding: 1.5rem;
    width:60%;
    margin-top:0;
  }
  @media (max-width: 480px) {
    padding: 1.5rem;
    width:90%;
    margin-top:0;
  }
`;

export const Title = styled.h2`
  font-size: 2.52rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
font-family: "Reddit Sans";

@media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Descriptions = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  text-align: center;
font-family: "Lato";

 @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
 