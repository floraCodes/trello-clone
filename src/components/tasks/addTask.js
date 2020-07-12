import styled from '@emotion/styled';
import React, { useState, useContext } from 'react';
import myContext from '../../utils/myContext';

const AddTask = ({ listId }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  const { createNewTask } = useContext(myContext);

  const handleClick = () => setOpen(!open);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    createNewTask(title, listId);
    setTitle('');
    setOpen(!open);
  };
  const handleBlur = () => {
    title ? handleSubmit() : setOpen(!open);
  };
  return (
    <Container>
      {open ? (
        <FormContainer>
          <Input
            placeholder="Enter a title for this card..."
            value={title}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
          <ButtonsContainer>
            <Button>Add Task</Button>
            <CloseIcon onMouseDown={handleClick}>x</CloseIcon>
          </ButtonsContainer>
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
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const CloseIcon = styled.span`
  background: #d7d8db;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: none;
  background: lightgreen;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
