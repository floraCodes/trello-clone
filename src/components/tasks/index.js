import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import AddTask from './addTask';
import Task from './task';
import { Container } from './tasksCss';

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
