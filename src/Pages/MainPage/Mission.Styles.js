import styled from 'styled-components';

export const MissionVisionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url('/images/mission.png');
  background-size: cover;
`;

export const SectionDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  background: #2C2C2C;
  margin: 0;
  padding: 40px 20px;
  // width: 100%;
  color: white;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 60px 100px;
  }
`;

export const StatementsGrid = styled.div`
  // width: 100%;
  margin-top:20px;
  padding: 60px 20px;
  // background-image: url('/images/mission.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 60px;
    padding: 80px;
  }
`;

export const StatementCard = styled.div`
  // background-color: rgba(45, 54, 66, 0.6); 
  border-radius: 10px;
  padding: 30px;
  min-height: 300px;
  // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 450px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: white;
  backdrop-filter: blur(1px); /* Optional: adds glass effect */
border-radius: 10px;
background: linear-gradient(254deg, rgba(51, 82, 186, 0.20) 0.8%, rgba(23, 37, 84, 0.20) 99.2%);
box-shadow: 0 4px 24.9px 0 rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    flex: 1;
    max-width: 500px;

    &:nth-child(1) {
      transform: translateY(200px);
    }

    &:nth-child(2) {
      transform: translateY(-60px);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    background-image: url('/user-icon.svg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.1;
    transform: rotate(-15deg);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -30px;
    right: -30px;
    width: 120px;
    height: 120px;
    background-image: url('/settings-icon.svg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.08;
    transform: rotate(20deg);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 20px;
  color: var(--light-text);
  z-index: 1;
`;

export const CardText = styled.p`
  font-size: 1em;
  line-height: 1.7;
  color: var(--gray-text);
  z-index: 1;
`;
