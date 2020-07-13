import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 0.4rem;
  font-size: 14px;
`;

export const Paragraph = styled.p`
  margin: 0.2 0rem;
  padding: 0.3rem 0;
  border-radius: 0.1875rem;
  color: #737475;
  &:hover {
    cursor: pointer;
    background: #d7d8db;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Input = styled.textarea`
  border: none;
  border-radius: 0.2rem;
  background: #fff;
  align-self: stretch;
  height: 3rem;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  text-align: left;
  resize: none;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CloseIcon = styled.span`
  background: #d7d8db;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  background: lightgreen;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
