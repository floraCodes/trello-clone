import styled from '@emotion/styled';
import React, { useState, useContext } from 'react';
import myContext from '../utils/myContext';

const Container = styled.div`
  width: 15rem;
  overflow-wrap: break-word;
`;

const Title = styled.h2`
  margin: 0.5rem;
  padding: 0.3rem 0;
  font-weight: 500;
  font-size: 14px;
  color: #172b4d;
`;

const FormContainer = styled.div`
  margin-bottom: 0.4rem;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 0.2rem;
  padding: 0.3rem 0;
  margin: 0 0.5rem;
  background: #fff;
  font-size: 14px;
  outline: 2px solid #255fc2;
  -moz-outline-radius: 3px;
`;

// const Button = styled.button`
//   border: none;
//   background: lightgreen;
//   padding: 0.3rem 0.5rem;
//   margin-left: 0.3rem;
// `;

const ListTitle = ({ listId, title }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const { changeListTilte } = useContext(myContext);

  const handleClick = () => setOpen(!open);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleBlur = () => {
    changeListTilte(newTitle, listId);
    setOpen(!open);
  };

  return (
    <Container>
      {open ? (
        <FormContainer>
          <TitleInput
            autoFocus
            value={newTitle}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormContainer>
      ) : (
        <Title onClick={handleClick}>{title}</Title>
      )}
    </Container>
  );
};

export default ListTitle;
