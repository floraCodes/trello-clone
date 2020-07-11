import React from 'react';
import Task from './task';
import styled from '@emotion/styled';
import AddTask from './addTask';

const Container = styled.div`
  display: grid;
  gap: 0.4rem;
  padding-bottom: 0.4rem;
`;

const Tasks = () => {
  return (
    <Container>
      <Task />
      <Task />
      <AddTask />
    </Container>
  );
};

export default Tasks;
