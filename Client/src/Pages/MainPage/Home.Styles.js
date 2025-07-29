import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh; 
  padding: 80px 5% 40px; 
background: url('/images/home.png') no-repeat center center;
background-size: cover;
color:white;
  gap: 40px; 
  overflow: hidden;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 120px ;
  }

  @media (min-width: 1024px) {
    // padding: 120px 10% 80px;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  max-width: 800px; 
  text-align: center; 
//   margin-right:40px;

  @media (min-width: 768px) {
    text-align: center; 
    margin-right: 40px;
   
  }
    @media (min-width: 480px) {
    text-align: center; 
    margin-right: 40px;
   
  }
`;

export const Title = styled.h1`
//   font-size: 31px;
  line-height: 1.2;
  margin-bottom: 20px;
  font-weight: 700;
// margin-left:-50px;
  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 41px;
    
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  color: var(--gray-text);
// margin-left:-40px;

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: center; 
  }

    @media (min-width: 468px) {
    font-size: 20px;
    text-align: center; 
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  color: var(--gray-text);
// margin-left:-40px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

// export const AppStoreButtons = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   justify-content: center;
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: flex-start;
//     gap: 20px;
//   }
    
// `;

export const AppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #333;
  color: white;
  font-size: 0.95em;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 90%;               /* take most of the screen width on small screens */
  max-width: 250px;

  &:hover {
    background-color: #555;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;

    @media (max-width: 480px) {
      margin-right: 6px;
    }
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ImageWrapper = styled.div`
  flex: 2; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.5rem;
    max-width: 100%;
  }
`;

export const PhoneImage = styled.img`
  width: 100%; 
  max-width: 400px; 
  height: auto;
  object-fit: contain;
  transform: scale(1.1) translateY(10px);
  margin-left: 0;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 300px;
    transform: scale(1) translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
    transform: scale(0.95) translateY(0);
  }

  @media (min-width: 1200px) {
    max-width: 800px;
  }
`;
export const MobileOnlyRowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileImageWrapper = styled.div`
  max-width: 130px;

  @media (max-width: 480px) {
    max-width: 100px;
  }
`;

export const DesktopImageWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    padding: 1rem;
    max-width: 600px;
    width: 100%;
  }
`;

/* Optional: hide desktop-only AppButtons on mobile */
export const AppStoreButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }

  &.desktop-only {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;