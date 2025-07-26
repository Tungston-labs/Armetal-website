import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: rgb(192, 23, 23);
  padding: 40px 0;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const RowWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  // scroll-behavior: smooth;
  gap: 16px;
  padding: 10px 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FeatureCard = styled.div`
  flex: 0 0 auto;
  width: 250px;
  min-height: 150px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 180px;
    font-size: 14px;
  }
`;

export const TransparentCard = styled.div`
  position: absolute;
  top: 10px;
  ${({ position }) => (position === "right" ? "right: 0" : "left: 0")};
  width: 250px;
  min-height: 150px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 20px;
  z-index: 2;
  pointer-events: none;
  font-weight: 600;
  color: #000;

  @media (max-width: 768px) {
    width: 200px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
