import React, { useState } from 'react';
import styled from '@emotion/styled';
import AddTaskForm from './addTaskForm';

const Container = styled.div`
  margin: 0 0.4rem;
  font-size: 14px;
`;

const Paragraph = styled.p`
  padding: 0.5rem 0;
`;

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <Container>
      {open ? (
        <AddTaskForm open={open} setOpen={setOpen} />
      ) : (
        <Paragraph onClick={handleClick}>+ Add New Task</Paragraph>
      )}
    </Container>
  );
};

export default AddTask;
