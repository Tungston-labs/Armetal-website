import styled from 'styled-components';

export const FrameContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const FirstImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  @media (max-width: 480px) {
    height: auto;
  }
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 480px) {
    height: auto;
  }
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  color: #fff;
  padding: 20px 25px;
  border-radius: 10px;
  overflow-y: auto;

  h1 {
    font-size: clamp(1.0rem, 4vw, 2.5rem);
    margin-bottom: 16px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 15px;
    font-size:20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    // top: 5%;
    font-size:10px;

  }
`;

export const SectionBlock = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(0.25rem, 2.5vw, 1.25rem);
  font-weight: bold;
  margin-bottom: 8px;
`;

export const SectionParagraph = styled.p`
  font-size: clamp(0.35rem, 2.2vw, 1rem);
  line-height: 1.6;
`;

export const ImageOnlyWrapper = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 480px) {
    height: auto;
  }
`;
