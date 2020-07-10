import React from 'react';
import Task from './task';
import styled from '@emotion/styled';

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
      <Task />
      <Task />
    </Container>
  );
};

export default Tasks;
