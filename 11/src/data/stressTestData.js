export const generateLargeDataset = (taskCount = 1000) => {
  const columns = {
    "col-1": { id: "col-1", title: "Backlog", taskIds: [] },
    "col-2": { id: "col-2", title: "In Progress", taskIds: [] },
    "col-3": { id: "col-3", title: "Done", taskIds: [] },
  };

  const tasks = {};
  const columnIds = Object.keys(columns);

  for (let i = 1; i <= taskCount; i++) {
    const taskId = `task-${i}`;
    tasks[taskId] = {
      id: taskId,
      content: `Stress Test Task ${i}: Highly detailed description for performance testing.`,
    };

    // Distribute tasks across columns
    const colId = columnIds[i % columnIds.length];
    columns[colId].taskIds.push(taskId);
  }

  return {
    tasks,
    columns,
    columnOrder: columnIds,
  };
};
