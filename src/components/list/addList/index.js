import React, { useState } from 'react';
import ListTitleForm from '../listTitleForm';
import { Container, Paragraph } from './addListCss';

const AddList = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      {open ? (
        <ListTitleForm open={open} setOpen={setOpen} type="newList" title="" />
      ) : (
        <Paragraph onClick={() => setOpen(!open)}>+Add New List</Paragraph>
      )}
    </Container>
  );
};

export default AddList;
