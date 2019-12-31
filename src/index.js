"use strict"

document.getElementById('additem').addEventListener('click', () => {
  const todoform = document.getElementById('todoform')
  if (todoform.style.display === 'none') todoform.style.display = 'block'
  else todoform.style.display = 'none'
})