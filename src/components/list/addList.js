import React, { useState } from 'react';
import styled from '@emotion/styled';
import ListTitleForm from './listTitleForm';

const Container = styled.article`
  font-family: inherit;
  gap: 0.5rem;
  border-radius: 0.2rem;
  background: #ebecf0;
  padding: 0.4rem 0 0.2rem 0;
  margin: 0.3rem 0;
  &:hover {
    cursor: pointer;
    background: rgba(115, 116, 117, 0.3);
  }
`;
const Paragraph = styled.p`
  width: 15rem;
  margin: 0.2 0rem;
  padding: 0.3rem;
  border-radius: 0.1875rem;
  color: #737475;
`;

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
