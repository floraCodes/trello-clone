import React, { useContext, useState } from 'react';
import myContext from '../../../utils/myContext';
import {
  Container,
  FormContainer,
  Input,
  ButtonsContainer,
  Button,
  CloseIcon,
  Paragraph
} from './addTaskCss';

const AddTask = ({ listId }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  const { createNewTask } = useContext(myContext);

  const handleClick = () => setOpen(!open);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    createNewTask(title, listId);
    setTitle('');
    setOpen(!open);
  };
  const handleBlur = () => {
    title ? handleSubmit() : setOpen(!open);
  };
  return (
    <Container>
      {open ? (
        <FormContainer>
          <Input
            placeholder="Enter a title for this card..."
            value={title}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
          <ButtonsContainer>
            <Button>Add Task</Button>
            <CloseIcon onMouseDown={handleClick}>x</CloseIcon>
          </ButtonsContainer>
        </FormContainer>
      ) : (
        <Paragraph onClick={handleClick}>+ Add New Task</Paragraph>
      )}
    </Container>
  );
};

export default AddTask;
