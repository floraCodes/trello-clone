import styled from '@emotion/styled';
import React, { useState } from 'react';
import ListTitleForm from './listTitleForm';

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
