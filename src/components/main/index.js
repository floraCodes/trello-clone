import React, { useState } from 'react';
import List from '../list';
import { appData } from '../../utils/data';
import MyContext from '../../utils/myContext';
import { Container } from './mainCss';
import { v4 as uuidv4 } from 'uuid';
import AddList from '../addList';

const Main = () => {
  const [data, setData] = useState(appData);
  const { tasks, lists, listOrder } = data;

  const createNewList = (title) => {
    console.log('creating new list');
  };

  const createNewTask = (title, listId) => {
    const taskId = uuidv4();
    const list = lists[listId];

    const newTask = {
      [taskId]: {
        id: taskId,
        title: title
      }
    };

    const newData = {
      ...data,
      tasks: {
        ...tasks,
        ...newTask
      },
      lists: {
        ...lists,
        [listId]: {
          ...list,
          taskIds: [...list.taskIds, taskId]
        }
      }
    };
    setData(newData);
  };

  const changeListTilte = (newTitle, listId) => {
    const list = lists[listId];
    list.title = newTitle;

    const newData = {
      ...data,
      lists: {
        ...lists,
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
        ...tasks,
        [taskId]: task
      }
    };
    setData(newData);
  };

  return (
    <MyContext.Provider
      value={{ changeListTilte, changeTaskTitle, createNewTask, createNewList }}
    >
      <Container>
        {listOrder.map((listId) => {
          const list = lists[listId];
          return <List list={list} key={listId} tasks={tasks} />;
        })}
        <AddList />
      </Container>
    </MyContext.Provider>
  );
};

export default Main;
