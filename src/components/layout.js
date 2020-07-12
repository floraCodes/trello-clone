import styled from '@emotion/styled';
import React from 'react';
import Header from './header';
import Main from './main';

const Container = styled.div`
  font-family: 'Roboto';
  margin: 0.5rem;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default Layout;
