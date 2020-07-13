import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import myContext from '../../utils/myContext';

const FormContainer = styled.div`
  margin-bottom: 0.4rem;
`;

const TitleInput = styled.input`
  width: 15rem;
  border: none;
  border-radius: 0.2rem;
  padding: 0.3rem 0;
  margin: 0 0.5rem;
  background: #fff;
  font-size: 14px;
  outline: 2px solid #255fc2;
  -moz-outline-radius: 3px;
`;

const ListTitleForm = ({ listId, title, open, setOpen, type }) => {
  const [newTitle, setNewTitle] = useState(title);

  const { changeListTilte, createNewList } = useContext(myContext);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleBlur = () => {
    if (type === 'editList') {
      changeListTilte(newTitle, listId);
    } else {
      newTitle && createNewList(newTitle);
    }
    setOpen(!open);
  };

  const handleKeyDown = (e) => [e.key === 'Enter' && handleBlur()];

  return (
    <FormContainer>
      <TitleInput
        autoFocus
        value={newTitle}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </FormContainer>
  );
};

export default ListTitleForm;
