export const kanbanReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TASK": {
      const {
        sourceColumnId,
        destinationColumnId,
        sourceIndex,
        destinationIndex,
        taskId,
      } = action.payload;

      const sourceCol = state.columns[sourceColumnId];
      const destCol = state.columns[destinationColumnId];

      const newSourceTaskIds = [...sourceCol.taskIds];

      if (sourceColumnId === destinationColumnId) {
        // CASE: Moving within the same column
        newSourceTaskIds.splice(sourceIndex, 1); // remove from old pos
        newSourceTaskIds.splice(destinationIndex, 0, taskId); // insert at new pos

        return {
          ...state,
          columns: {
            ...state.columns,
            [sourceColumnId]: {
              ...sourceCol,
              taskIds: newSourceTaskIds,
            },
          },
        };
      }

      // CASE: Moving between different columns
      const newDestTaskIds = [...destCol.taskIds];
      newSourceTaskIds.splice(sourceIndex, 1); // remove from source
      newDestTaskIds.splice(destinationIndex, 0, taskId); // add to destination

      return {
        ...state,
        columns: {
          ...state.columns,
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

    case "ADD_COLUMN": {
      const { title } = action.payload;
      const newId = `column-${Date.now()}`;

      const newColumn = {
        id: newId,
        title: title,
        taskIds: [],
      };

      return {
        ...state,
        columns: {
          ...state.columns,
          [newId]: newColumn,
        },
        columnOrder: [...state.columnOrder, newId],
      };
    }

    default:
      return state;
  }
};
