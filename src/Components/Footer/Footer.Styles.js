import styled from 'styled-components';

export const FooterWrapper = styled.footer`
//   width: 100%;
  background-color: #2c2c2c;
  background-image: url('/images/footer.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
  padding: 60px 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 16px 80px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px 60px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 0 20px;
`;

export const Logo = styled.img`
  width: 80px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 60px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 24px;
  padding: 0;
  margin: 20px 0;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const NavItem = styled.li`
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: #1a73e8;
  }

  &:first-child {
    text-decoration: underline;
    color: #1a73e8;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Icon = styled.span`
  font-size: 18px;
  color: #ccc;
`;

export const FooterNote = styled.p`
  font-size: 13px;
  color: #ccc;
  margin-top: 50px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 30px;
  }
`;

export const BottomCurve = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  z-index: -1;
`;
