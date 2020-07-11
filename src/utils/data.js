export const appData = {
  board: {
    id: 'board-1',
    title: 'Board Title'
  },
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Groceries Shopping',
      completed: 'false'
    },
    'task-2': {
      id: 'task-2',
      content: 'Yoga and Gym (Exercising)',
      completed: 'false'
    },
    'task-3': {
      id: 'task-3',
      content: 'Walk the dog (Dog gym)',
      completed: 'false'
    },
    'task-4': {
      id: 'task-4',
      content: 'Cook lunch and dinner',
      completed: 'false'
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1']
};
