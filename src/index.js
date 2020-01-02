import { getItemFromForm, getProjectTitle } from 'get-item-module.js'
import { populateToDoItem, populateProject } from 'populate-ui-module.js'
import { createProject } from 'project-module.js'
import { createToDoItem } from 'to-do-item-module.js'


"use strict"

(function() {
  document.getElementById('additem').addEventListener('click', () => {
    const todoForm = document.getElementById('todoform')
    if (todoForm.style.display === 'none') todoForm.style.display = 'block'
    else todoForm.style.display = 'none'
  })

  document.getElementById('addproject').addEventListener('click', () => {
    const projectForm = document.getElementById('projectform')
    if (projectForm.style.display === 'none') projectForm.style.display = 'block'
    else projectForm.style.display = 'none'
  })
})()

const toDoListCoordinator = (function() {
  const newProject = function() {
    var projectTitle = getProjectTitle()
    const project = createProject(projectTitle)
    return project
  }

  const newToDo = function() {
    var itemDetails = getItemFromForm()
    const toDo = createToDoItem(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3])
    return toDo
  }

  return { newProject, newToDo }
})


