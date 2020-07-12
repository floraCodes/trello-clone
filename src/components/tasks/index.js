import React from 'react';
import Task from './task';
import styled from '@emotion/styled';
import AddTask from './addTask';

const Container = styled.div`
  display: grid;
  gap: 0.4rem;
  padding-bottom: 0.4rem;
`;

const Tasks = ({ listId, taskIds, tasks }) => {
  return (
    <Container>
      {taskIds.map((taskId) => {
        const task = tasks[taskId];
        return <Task key={taskId} task={task} />;
      })}
      <AddTask listId={listId} />
    </Container>
  );
};

export default Tasks;
