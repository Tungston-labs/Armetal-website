import styled from "styled-components";


export const PageWrapper = styled.section`
padding: 6rem 3rem 3rem;
background-color: #ffffff;
font-family: "Raleway", sans-serif;
display: flex;
justify-content: center;
`;


export const Card = styled.div`
width: 100%;
max-width: 1200px;
margin: auto;
`;


export const Title = styled.h1`
font-family: "Inter", sans-serif;
font-size: 1.8rem;
font-weight: bold;
margin-bottom: 2.5rem;
padding-top: 2.5rem;
text-align: center;


@media (max-width: 768px) {
font-size: 1.5rem;
margin-bottom: 2rem;
}
`;


export const SectionTitle = styled.h2`
font-family: "Inter", sans-serif;
font-size: 1.05rem;
font-weight: 600;
color: #000000;
margin-bottom: 0.75rem;
`;


export const Text = styled.p`
font-family: "Inter", sans-serif;
line-height: 1.9;
color: #000000;
text-align: left;
margin-bottom: 1rem;
font-size: 0.95rem;
`;


export const List = styled.ul`
margin-left: 20px;
margin-bottom: 1.5rem;
color: #000000;
`;


export const ListItem = styled.li`
margin-bottom: 0.75rem;
font-family: "Inter", sans-serif;
font-size: 0.95rem;
`;


export const Email = styled.a`
color: #2563eb;
font-weight: 600;
text-decoration: none;
font-family: "Inter", sans-serif;


&:hover {
text-decoration: underline;
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