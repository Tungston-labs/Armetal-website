import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const NavBar = styled.nav`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    top: 10px;
    left: 10px;
    right: 10px;
  }
`;

export const Logo = styled.img`
  height: 10.2rem;
  margin-left: 40px;

  @media (max-width: 768px) {
    height: 6rem;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    height: 5rem;
  }
`;

export const NavList = styled.div`
  background-color: white;
  display: flex;
  overflow: hidden;
  width: 40%;
  gap: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    gap: 5px;
    flex-wrap: wrap;
  }

  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 10px;
    font-size: 16px;
    gap: 8px; 
    padding: 5px;
  }
`;

export const NavItem = styled.a`
  padding: 10px 20px;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#000" : "#666")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 2px ;
    // width: 60%;
    text-align: center;
    
  }
`;

// export const Title = styled.h1`
//   margin-top: 120px;
//   font-size: 24px;
//   font-weight: 600;
//   text-align: center;

//   @media (max-width: 768px) {
//     margin-top: 80px;
//     font-size: 20px;
//   }

//   @media (max-width: 480px) {
//     margin-top: 60px;
//     font-size: 18px;
//   }
// `;

// export const Subtitle = styled.p`
//   margin-top: 20px;
//   font-size: 16px;
//   max-width: 600px;
//   margin-left: auto;
//   margin-right: auto;
//   line-height: 1.6;
//   text-align: center;

//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 0 10px;
//   }

//   @media (max-width: 480px) {
//     font-size: 13px;
//   }
// `;
