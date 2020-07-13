import React, { useContext, useState } from 'react';
import myContext from '../../../utils/myContext';
import { FormContainer, TitleInput } from './listTitleFormCss';

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
