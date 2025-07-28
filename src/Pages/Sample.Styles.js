import styled from 'styled-components';

export const Container = styled.section`
  background: url('/images/HOME.png') no-repeat center ;
  background-size: cover;
  color: white;
  padding: 30px ;

  @media (min-width: 768px) {
    padding: 50px ;
  }
`;

// export const NavBar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   margin-bottom: 40px;
// `;

export const Logo = styled.img`
//   height: 60px;
width:5%;

  @media (max-width: 480px) {
    height: 35px;
    width:10%;
  }
`;

// export const NavLinks = styled.div`
//   display: flex;
//   gap: 25px;
//   font-size: 16px;
// background-color:white;
// color:black

//   a {
//     color: white;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   @media (max-width: 600px) {
//     flex-wrap: wrap;
//     gap: 15px;
//     justify-content: center;
//   }
// `;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    // align-items: center;
    // margin-top:50px;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
margin-top:80px;
// margin-left:50px;
  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 45px;
    margin-left:80px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  margin: 15px 0;
// margin-left:50px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
     @media (min-width: 1024px) {
    font-size: 30px;
    margin-left:80px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  // max-width: 700px;
  line-height: 1.6;
  margin-bottom: 20px;
// margin-left:50px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
     @media (min-width: 1024px) {
    font-size: 25px;
    margin-left:80px;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
// margin-left:70px;
  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
 @media (min-width: 1024px) {
   
    margin-left:100px;
  }
  &.desktop-only {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const AppButton = styled.a`
  display: flex;
  align-items: center;
  background-color: #000;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;

  img {
    height: 20px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #222;
  }
    
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 10px 16px;

    img {
      height: 18px;
      margin-right: 8px;
    }
  }
}
`;

export const HeroImage = styled.img`
  // max-width: 300px;
  // height: auto;
  // margin-top: -70px;

  &.desktop-only {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
     
  }
 @media (min-width: 768px) {
    max-width: 800px;
    // margin-left: 10px;
  }
  @media (max-width: 768px) {
    max-width: 100px;
    // margin-left: 10px;
  }
    @media (max-width: 468px) {
    max-width: 150px;
        // margin-left: -10px;
  }
`;

export const MobileRow = styled.div`
  display: flex;
 margin-top:-10px
  align-items: center;
  justify-content: space-between;
  // gap: 15px;

  @media (min-width: 768px) {
    display: none;
  }
`;
//  export const Container = styled.div`
//   width: 100%;
//   padding: 0;
//   margin: 0;
// `;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 1rem ;
  
  width: 100%; 
  @media (max-width: 768px) {
    // padding: 1rem;
    
  }
`;


// export const Logo = styled.img`
//   height: 50px;
// `;

// export const NavLinks = styled.div`
//   display: flex;
//   gap: 7rem; 
//   background-color: white;
//   height: 60px;
//   align-items: center;
//   justify-content: flex-end;
//   padding:5px;
//   margin-left: auto; 
//   padding-right: 30px 20px;  
//   width: fit-content;
// font-size:20px;
//   a {
//     text-decoration: none;
//     color: #000;
//     font-weight: 500;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;


export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavLinks = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem 2rem;
  background-color: white;

  a {
    text-decoration: none;
    color: #000;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

// export const GooglePlayButton = styled.a`
//   display: flex;
//   align-items: center;
//   background-color: #0f9d58; /* Google Play green */
//   color: white;
//   padding: 10px 20px;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 14px;
//   transition: 0.3s ease;

//   img {
//     height: 20px;
//     margin-right: 10px;
//   }

//   &:hover {
//     background-color: #0c7b44;
//   }
// `;

// export const AppStoreButton = styled.a`
//   display: flex;
//   align-items: center;
//   background-color: #0070c9; /* App Store blue */
//   color: white;
//   padding: 10px 20px;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 14px;
//   transition: 0.3s ease;

//   img {
//     height: 20px;
//     margin-right: 10px;
//   }

//   &:hover {
//     background-color: #005fa3;
//   }
// `;

// export const MobileRow = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 10px;
//   flex-wrap: nowrap;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// export const CTAWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   @media (max-width: 767px) {
//     flex-direction: column;
//   }

//   @media (min-width: 768px) {
//     flex-direction: row;
//     gap: 20px;
//   }

//   &.desktop-only {
//     display: none;

//     @media (min-width: 768px) {
//       display: flex;
//     }
//   }
// `;

export const AppButtonBlack = styled.a`
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 24px;
  white-space: nowrap;
width:25%;
height:35%;
  img {
    height: 40px;
    margin-right: 8px;
  }

  &:hover {
    background-color:black;
    color:white
  }
     @media (min-width: 769px) {
  width:50%
  }
     @media (max-width: 449px) {
  width:90%;
  height:50px;
  font-size:10px;
  }
`;

export const AppButtonWhite = styled.a`
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  border: 2px solid #000;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 24px;
  white-space: nowrap;
width:28%;
height:35%;
  img {
    height: 40px;
    margin-right: 8px;
  }

  &:hover {
    background-color:gray;
    color:black;
  }
   @media (min-width: 769px) {
  width:50%
  }
     @media (max-width: 449px) {
  width:90%;
    height:50px;
  font-size:10px;
  }
`;

// export const HeroImage = styled.img`
//   width: 90px;
//   height: auto;

//   @media (min-width: 768px) {
//     width: 150px;
//   }
// `;

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
  align-items: center;           // vertically center items
  justify-content: center;       // horizontally center items inside the navbar
  background-color: white;
  width: 50%;
  height: 50px;
  position: absolute;            // place on right side
  right: 0;                      // align to the right
  top: 10;                        // stick to top (optional)

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

export const SectionDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  background: #2C2C2C;
  margin: 0;
  margin-top:-50px;
  padding: 40px 20px;
  // width: 100%;
  color: white;
  text-align: center;
color: #FFF;
text-align: center;
font-family: "Reddit Sans";
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
  @media (max-width: 768px) {
    font-size: 20px;
    // padding: 60px 100px;
  }
`;