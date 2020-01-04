"use strict";

const createToDoItem = (title, description, dueDate, priority) => {
  const checked = { checked: false };

  return Object.assign({}, { title, description, dueDate, priority }, checked);
};

export { createToDoItem };
