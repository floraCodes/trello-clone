import styled from '@emotion/styled';
import React from 'react';
import Tasks from '../tasks';
import ListTitle from './listTitle';

const Container = styled.article`
  gap: 0.5rem;
  border-radius: 0.2rem;
  background: #ebecf0;
  padding: 0.4rem 0 0.2rem 0;
  margin: 0.3rem 0;
`;

const List = ({ list, tasks }) => {
  const { id, title, taskIds } = list;

  return (
    <Container>
      <ListTitle title={title} listId={id} />
      <Tasks taskIds={taskIds} tasks={tasks} listId={id} />
    </Container>
  );
};

export default List;
