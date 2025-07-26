import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;
  // overflow: hidden;
background: #2C2C2C;
  padding: 40px 0;
`;

export const SectionTitle = styled.h2`
  text-align: left;
  margin-bottom: 24px;
 margin-left:30px;
  
color: #FFF;
font-family: "Reddit Sans";
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: normal;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const RowWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
 display: flex; /* Make TransparentCard and ScrollContainer sit side-by-side */
  align-items: flex-start;
  
  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  // scroll-behavior: smooth;
  gap: 20px;
  padding: 30px 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FeatureCard = styled.div`
  flex: 0 0 auto;
  width: 400px;
  min-height: 400px;
  background: #fff;
  border-radius: 44px;
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s ease;

  display: flex;
  // align-items: center;
  justify-content: space-between; /* Puts image on right */

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 180px;
    font-size: 14px;
    // flex-direction: column; 
    text-align: center;
  }
`;

export const TransparentCard = styled.div`
  position: absolute;
  top: 10px;
  ${({ position }) => (position === "right" ? "right: 0" : "left: 0")};
  width: 450px;
  min-height: 450px;
background: rgba(34, 56, 126, 0.20);
  backdrop-filter: blur(7px);
  // border: 2px dashed #ccc;
  // border-radius: 12px;
  padding: 20px;
  z-index: 2;
  pointer-events: none;
  // font-weight: 600;
  // color: white;
  justify-content: center;
    display: flex;
  flex-direction: column;
   flex-shrink: 0;

   color: black;
font-family: "Reddit Sans";
font-size: 30px;
font-style: normal;
font-weight: 800;
// line-height: 140.754%;
   h3 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
  }
  @media (max-width: 768px) {
    display: none;
    // width: 200px;
    // padding: 16px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
export const CardImage = styled.img`
  width: 50%;
  height: 40%;
  
  object-fit: contain;
  margin-bottom: 16px;
`;

export const CardTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: left;
  color: #22377D;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const CardDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: black;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

