const createProject = name => {
  const items = { items: [] };
  return Object.assign({}, { name }, items);
};

export { createProject };
