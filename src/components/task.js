import React from 'react';
import styled from '@emotion/styled';

const Container = styled.article`
  border-radius: 0.2rem;
  background-color: #fff;
  margin: 0 0.4rem;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  font-size: 14px;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0.4rem;
  font-weight: 400;
`;

const Description = styled.p`
  margin: 0;
  padding: 0.4rem;
  color: rgb(48, 47, 47);
`;

const Task = () => {
  return (
    <Container class="task">
      <Title>Task 1</Title>
      <Description>Description</Description>
    </Container>
  );
};

export default Task;
