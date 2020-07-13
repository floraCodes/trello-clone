import React, { useState } from 'react';
import MyContext from '../../utils/myContext';
import List from '../list';
import AddList from '../list/addList';
import { appData } from '../../utils/data';
import { Container } from './mainCss';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';

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

  const createNewTask = (taskTitle, listId) => {
    const taskId = uuidv4();
    const list = lists[listId];

    const newTask = {
      [taskId]: {
        id: taskId,
        title: taskTitle
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

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const list = lists[source.droppableId];
      const newTaskIds = Array.from(list.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...list,
        taskIds: newTaskIds
      };

      setData({
        ...data,
        lists: {
          ...lists,
          [newList.id]: newList
        }
      });
    } else {
      const sourceList = lists[source.droppableId];
      const destinationList = lists[destination.droppableId];

      const sourceTaskIds = Array.from(sourceList.taskIds);
      const destinationTaskIds = Array.from(destinationList.taskIds);

      sourceTaskIds.splice(source.index, 1);
      destinationTaskIds.splice(destination.index, 0, draggableId);

      const newSourceList = {
        ...sourceList,
        taskIds: sourceTaskIds
      };
      const newDestinationList = {
        ...destinationList,
        taskIds: destinationTaskIds
      };

      const newData = {
        ...data,
        lists: {
          ...lists,
          [sourceList.id]: newSourceList,
          [destinationList.id]: newDestinationList
        }
      };

      setData(newData);
    }
  };

  return (
    <MyContext.Provider
      value={{ changeListTilte, changeTaskTitle, createNewTask, createNewList }}
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <Container>
          {listOrder.map((listId) => {
            const list = lists[listId];
            return <List list={list} key={listId} tasks={tasks} />;
          })}
          <AddList />
        </Container>
      </DragDropContext>
    </MyContext.Provider>
  );
};

export default Main;
