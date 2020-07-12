import styled from '@emotion/styled';
import React, { useState } from 'react';

const AddTask = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const handleBlur = () => {
    setOpen(!open);
  };

  return (
    <Container>
      {open ? (
        <FormContainer>
          <Input
            autoFocus
            placeholder="Enter a title for this card..."
            onBlur={handleBlur}
          />
          <Button onClick={handleClick}>Add Task</Button>
        </FormContainer>
      ) : (
        <Paragraph onClick={handleClick}>+ Add New Task</Paragraph>
      )}
    </Container>
  );
};

export default AddTask;

//Styles

const Container = styled.div`
  margin: 0 0.4rem;
  font-size: 14px;
`;

const Paragraph = styled.p`
  margin: 0.2 0rem;
  padding: 0.3rem 0;
  border-radius: 0.1875rem;
  color: #737475;
  &:hover {
    cursor: pointer;
    background: #d7d8db;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Input = styled.textarea`
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
const Button = styled.button`
  border: none;
  background: lightgreen;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
