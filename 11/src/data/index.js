// Basic mock data generation helper
export const generateQuoteMap = (count) => {
  const tasks = {};
  const taskIds = [];
  for (let i = 1; i <= count; i++) {
    const id = `task-${i}`;
    tasks[id] = { id, content: `Quote #${i} - Something meaningful` };
    taskIds.push(id);
  }
  return {
    tasks,
    columns: {
      "column-1": { id: "column-1", title: "Generated Column", taskIds },
    },
    columnOrder: ["column-1"],
  };
};

export const authorQuoteMap = {
  tasks: {
    "task-a1": { id: "task-a1", content: "Work is love made visible." },
    "task-a2": {
      id: "task-a2",
      content: "Believe you can and you're halfway there.",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Inspiration",
      taskIds: ["task-a1", "task-a2"],
    },
  },
  columnOrder: ["column-1"],
};
