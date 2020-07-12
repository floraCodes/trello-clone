export const appData = {
  board: {
    id: 'board-1',
    title: 'Board Title'
  },
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Groceries Shopping'
    },
    'task-2': {
      id: 'task-2',
      title: 'Yoga and Gym'
    },
    'task-3': {
      id: 'task-3',
      title: 'Walk the dog '
    },
    'task-4': {
      id: 'task-4',
      title: 'Cook lunch and dinner'
    },
    'task-5': {
      id: 'task-5',
      title: 'Organize Sushi '
    }
  },
  lists: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'Done',
      taskIds: ['task-5']
    }
  },
  // Facilitate reordering of the columns
  listOrder: ['column-1', 'column-2']
};
