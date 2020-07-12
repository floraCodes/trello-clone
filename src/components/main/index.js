import React, { useState } from 'react';
import List from '../list';
import { appData } from '../../utils/data';
import MyContext from '../../utils/myContext';
import { Container } from './mainCss';
import { v4 as uuidv4 } from 'uuid';
import AddList from '../list/addList';

const Main = () => {
  const [data, setData] = useState(appData);
  const { tasks, lists, listOrder } = data;

  const createNewList = (listTitle) => {
    const listId = uuidv4();
    const newList = {
      [listId]: {
        id: listId,
        title: listTitle,
        taskIds: []
      }
    };

    const newData = {
      ...data,
      lists: {
        ...lists,
        ...newList
      },
      listOrder: [...listOrder, listId]
    };
    setData(newData);
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
