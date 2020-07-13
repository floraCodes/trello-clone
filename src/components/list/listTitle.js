import React, { useState } from 'react';
import ListTitleForm from './listTitleForm';
import { Container, Title } from './listTitleCss';

const ListTitle = ({ listId, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      {open ? (
        <ListTitleForm
          title={title}
          listId={listId}
          open={open}
          setOpen={setOpen}
          type="editList"
        />
      ) : (
        <Title onClick={() => setOpen(!open)}>{title}</Title>
      )}
    </Container>
  );
};

export default ListTitle;
