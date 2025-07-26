import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  color: #fff;
  background-image: url('/images/Home.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  // align-items: center;
  margin-left:10%
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 50px;
color:black;
align-item:center;
justify-content:center;
 background-color:white;
width:40%;
height:50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const NavLink = styled.a`
  color: black;
  text-align: center;

// background-color:white;
font-size:25px;
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
    font-size: 1.5rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Paragraphs = styled.p`
  font-size: 32px;
  align-item:center;
  text-align: center;
  margin-top:30px;

  justify-content:center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 30px;
 font-weight: 300;
  margin-bottom: 10px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
export const Para = styled.p`
  font-size: 30px;
 font-weight: 300;
  margin-bottom: 10px;
  // line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
    `;