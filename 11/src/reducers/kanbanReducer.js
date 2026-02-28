export const kanbanReducer = (state, action) => {
  const { past, present, future } = state;

  switch (action.type) {
    case "UNDO": {
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    }

    case "REDO": {
      if (future.length === 0) return state;
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    }

    case "MOVE_TASK": {
      const {
        sourceColumnId,
        destinationColumnId,
        sourceIndex,
        destinationIndex,
        taskId,
      } = action.payload;

      const sourceCol = present.columns[sourceColumnId];
      const destCol = present.columns[destinationColumnId];
      const newSourceTaskIds = [...sourceCol.taskIds];

      let newPresent;
      if (sourceColumnId === destinationColumnId) {
        newSourceTaskIds.splice(sourceIndex, 1);
        newSourceTaskIds.splice(destinationIndex, 0, taskId);
        newPresent = {
          ...present,
          columns: {
            ...present.columns,
            [sourceColumnId]: {
              ...sourceCol,
              taskIds: newSourceTaskIds,
            },
          },
        };
      } else {
        const newDestTaskIds = [...destCol.taskIds];
        newSourceTaskIds.splice(sourceIndex, 1);
        newDestTaskIds.splice(destinationIndex, 0, taskId);
        newPresent = {
          ...present,
          columns: {
            ...present.columns,
            [sourceColumnId]: {
              ...sourceCol,
              taskIds: newSourceTaskIds,
            },
            [destinationColumnId]: {
              ...destCol,
              taskIds: newDestTaskIds,
            },
          },
        };
      }

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }

    case "ADD_COLUMN": {
      const { title } = action.payload;
      const newId = `column-${Date.now()}`;
      const newColumn = { id: newId, title, taskIds: [] };

      const newPresent = {
        ...present,
        columns: {
          ...present.columns,
          [newId]: newColumn,
        },
        columnOrder: [...present.columnOrder, newId],
      };

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }

    case "UPDATE_TASK": {
      const { taskId, content } = action.payload;
      const newPresent = {
        ...present,
        tasks: {
          ...present.tasks,
          [taskId]: {
            ...present.tasks[taskId],
            content,
          },
        },
      };

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }

    case "SET_STRESS_DATA": {
      return {
        past: [],
        present: action.payload,
        future: [],
      };
    }

    default:
      return state;
  }
};
