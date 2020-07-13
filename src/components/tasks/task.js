import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import myContext from '../../utils/myContext';
import { Draggable } from 'react-beautiful-dnd';

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

const Container = styled.article`
  border-radius: 0.2rem;
  background-color: ${(props) => (props.isDragging ? 'pink' : 'white')};
  margin: 0 0.4rem;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  width: 15rem;
  &:hover {
    cursor: pointer;
    background: #f4f5f7;
  }
`;

const Title = styled.h4`
  margin: 0;
  padding: 0.4rem;
  font-weight: 400;
  font-size: 14px;
`;

const FormContainer = styled.div`
  margin-bottom: 0.4rem;
`;

const TitleInput = styled.input`
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem 0 0.04rem 0;
  margin: 0 0.4rem;
  background: transparent;
  font-size: 14px;
`;
