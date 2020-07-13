import React from 'react';
import Tasks from '../tasks';
import ListTitle from './listTitle';
import { Container } from './listCss';

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
