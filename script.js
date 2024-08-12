'use strict';

//selecting elemnts
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
let todoInput = document.getElementById('todo-input');

//add task to the todo list
addBtn.addEventListener('click', function () {
  let newListItem = document.createElement('li');
  newListItem.textContent = todoInput.value;
  //console.log(newListItem);
  todoInput.value = '';
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  newListItem.appendChild(deleteBtn);
  todoList.appendChild(newListItem);
  deleteBtn.addEventListener('click', function () {
    todoList.removeChild(newListItem);
  });
});
