import React from 'react';
import List from './list';
import styled from '@emotion/styled';

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, 17rem);
  gap: 0.5rem;
`;

const Main = () => {
  return (
    <Container>
      <List />
      <List />
      <List />
    </Container>
  );
};

export default Main;
