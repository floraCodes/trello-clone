import React from 'react';
import ListTitle from './listTitle';
import Tasks from './tasks';
import styled from '@emotion/styled';

const Container = styled.article`
  gap: 0.5rem;
  border-radius: 0.2rem;
  background: #ebecf0;
  padding: 0.4rem 0 0.2rem 0;
`;

const List = () => {
  return (
    <Container class="list">
      <ListTitle />
      <Tasks />
    </Container>
  );
};

export default List;
