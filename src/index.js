import { getItemFromForm, getProjectTitle } from 'get-item-module.js'
import { populateToDoItem, populateProject } from 'populate-ui-module.js'
import { createProject } from 'project-module.js'
import { createToDoItem } from 'to-do-item-module.js'


"use strict"

const toDoListController = (function() {
  var projects = []
  var numberOfProjects = 0
  var currentProject = createProject('Project 1')
  currentProject.number = numberOfProjects++
  projects.push(currentProject)

  const newProject = function() {
    var projectTitle = getProjectTitle()
    const project = createProject(projectTitle)
    project.number = numberOfProjects++
    projects.push(project)
    currentProject = project
    populateProject(projectTitle)
  }

  const newToDo = function() {
    var itemDetails = getItemFromForm()
    const toDo = createToDoItem(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3])
    populateToDoItem(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3])
    return toDo
  }

  const addToDoToProject = function() {
    currentProject.addItem(newToDo())
  }

  return { newProject, addToDoToProject }
})()

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

  document.getElementById('submitproject').addEventListener(
    'click', toDoListController.newProject)

  document.getElementById('submititem').addEventListener(
    'click', toDoListController.addToDoToProject)
})()

