import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  gap: 50px;
  padding: 60px 5%;
  background: linear-gradient(181deg, rgba(14, 23, 51, 1) 0%, rgba(42, 69, 153, 1) 100%);
  color: white;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 40px 4%;
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 5%;
    gap: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px 5%;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;

  h4 {
    margin-top: 30px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const Title = styled.h2`
  color: #FFF;
  font-family: "Reddit Sans";
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.863%; /* 60.239px */
  margin-bottom: 20px;

  span {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const StoreButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const StoreButton = styled.img`
  width: 140px;
  height: auto;

  @media (max-width: 480px) {
    width: 120px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Row = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #A9CBF7;
  background: #2F2F2F;
  color: white;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 8px;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #A9CBF7;
  background: #2F2F2F;
  color: white;
  resize: none;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 8px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #94ADFF;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #6a9eff;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;
export const AppStoreButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
margin-top:10px;
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
export const AppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: black;
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