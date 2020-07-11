import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
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
`;
const AddTaskForm = ({ open, setOpen }) => {
  const handleClick = () => {
    //Add a task to the list

    // Close the form
    setOpen(!open);
  };

  return (
    <Container>
      <Input placeholder="Enter a title for this card..." />
      <Button onClick={handleClick}>Add Task</Button>
    </Container>
  );
};

export default AddTaskForm;
