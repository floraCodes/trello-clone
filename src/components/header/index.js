import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header`
  margin-top: 0.5rem;
  height: 2.5rem;
`;

const BoardTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Header = () => {
  return (
    <Container>
      <BoardTitle>Board Title</BoardTitle>
    </Container>
  );
};

export default Header;
