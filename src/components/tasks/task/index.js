import React, { useContext, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import myContext from '../../../utils/myContext';
import { Container, FormContainer, TitleInput, Title } from './taskCss';

const Task = ({ task, index }) => {
  const { id, title } = task;

  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { changeTaskTitle } = useContext(myContext);

  const handleClick = () => setOpen(!open);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleBlur = () => {
    newTitle ? changeTaskTitle(newTitle, id) : setNewTitle(title);
    setOpen(!open);
  };

  const handleKeyDown = (e) => [e.key === 'Enter' && handleBlur()];

  return (
    <div>
      {open ? (
        <Container>
          <FormContainer>
            <TitleInput
              autoFocus
              value={newTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          </FormContainer>
        </Container>
      ) : (
        <Draggable draggableId={id} index={index}>
          {(provided, snapshot) => (
            <Container
              isDragging={snapshot.isDragging}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Title onClick={handleClick}>{newTitle}</Title>
            </Container>
          )}
        </Draggable>
      )}
    </div>
  );
};

export default Task;
