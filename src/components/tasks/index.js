import styled from '@emotion/styled';
import React from 'react';
import AddTask from './addTask';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  display: grid;
  gap: 0.4rem;
  padding-bottom: 0.4rem;
`;

const Tasks = ({ listId, taskIds, tasks }) => {
  return (
    <Droppable droppableId={listId}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          {taskIds.map((taskId, index) => {
            const task = tasks[taskId];
            return <Task key={taskId} task={task} index={index} />;
          })}
          {provided.placeholder}

          <AddTask listId={listId} />
        </Container>
      )}
    </Droppable>
  );
};

export default Tasks;
