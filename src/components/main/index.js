import React, { useState } from 'react';
import List from '../list';
import { appData } from '../../utils/data';
import MyContext from '../../utils/myContext';
import { Container } from './mainCss';

const Main = () => {
  const [data, setData] = useState(appData);
  const { tasks, lists, listOrder } = data;

  const changeListTilte = (newTitle, listId) => {
    const list = lists[listId];
    list.title = newTitle;

    const newData = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    };
    setData(newData);
  };

  const changeTaskTitle = (newTitle, taskId) => {
    const task = tasks[taskId];
    task.title = newTitle;

    const newData = {
      ...data,
      tasks: {
        ...data.tasks,
        [taskId]: task
      }
    };
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ changeListTilte, changeTaskTitle }}>
      <Container>
        {listOrder.map((listId) => {
          const list = lists[listId];
          return <List list={list} key={listId} tasks={tasks} />;
        })}
      </Container>
    </MyContext.Provider>
  );
};

export default Main;
