import styled from '@emotion/styled';

export const Container = styled.article`
  border-radius: 0.2rem;
  background-color: ${(props) => (props.isDragging ? 'lightgray' : 'white')};
  margin: 0 0.4rem;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  width: 15rem;
  &:hover {
    cursor: pointer;
    background: #f4f5f7;
  }
`;

export const Title = styled.h4`
  margin: 0;
  padding: 0.4rem;
  font-weight: 400;
  font-size: 14px;
`;

export const FormContainer = styled.div`
  margin-bottom: 0.4rem;
`;

export const TitleInput = styled.input`
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem 0;
  margin: 0 0.4rem;
  background: transparent;
  font-size: 14px;
`;
