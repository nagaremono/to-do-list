const getItemFromForm = function() {
  const itemTitle = document.getElementById('todotitle').value
  const itemDescription = document.getElementById('tododesc').value
  const itemDueDate = document.getElementById('duedate').value
  const itemPriority = document.querySelector('input[name="priority"]:checked').value

  return [itemTitle, itemDescription, itemDueDate, itemPriority]
}

const getProjectTitle = function() {
  const projectTitle = document.getElementById('projectitle').value

  return projectTitle
}

export { getItemFromForm, getProjectTitle }

