import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const Section = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 220px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  flex: 2;
  min-width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  flex: 1;
  min-width: 220px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ImagePreview = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #ccc;
`;

export const NextButton = styled.button`
  background-color: #0d47a1;
  color: white;
  padding: 12px 30px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  margin: 30px auto 0;
  transition: background 0.3s;

  &:hover {
    background-color: #08327a;
  }
`;

