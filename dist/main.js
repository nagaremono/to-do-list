/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/get-item-module.js":
/*!********************************!*\
  !*** ./src/get-item-module.js ***!
  \********************************/
/*! exports provided: getItemFromForm, getProjectTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItemFromForm\", function() { return getItemFromForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectTitle\", function() { return getProjectTitle; });\nconst getItemFromForm = function() {\n  const itemTitle = document.getElementById('todotitle').value\n  const itemDescription = document.getElementById('tododesc').value\n  const itemDueDate = document.getElementById('duedate').value\n  const itemPriority = document.querySelector('input[name=\"priority\"]:checked').value\n\n  return [itemTitle, itemDescription, itemDueDate, itemPriority]\n}\n\nconst getProjectTitle = function() {\n  const projectTitle = document.getElementById('projecttitle').value\n\n  return projectTitle\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/get-item-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_item_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-item-module.js */ \"./src/get-item-module.js\");\n/* harmony import */ var _populate_ui_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate-ui-module.js */ \"./src/populate-ui-module.js\");\n/* harmony import */ var _project_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-module.js */ \"./src/project-module.js\");\n/* harmony import */ var _to_do_item_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-do-item-module.js */ \"./src/to-do-item-module.js\");\n\n\n\n\n\n\n\"use strict\"\n\nconst toDoListController = (function() {\n  var projects = []\n  var numberOfProjects = 0\n\n  var currentProject = Object(_project_module_js__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])('Project 1')\n  currentProject.number = numberOfProjects++\n  projects.push(currentProject)\n  Object(_populate_ui_module_js__WEBPACK_IMPORTED_MODULE_1__[\"populateProject\"])('Project 1')\n\n  const attachFunctions = function() {\n    const projectList = document.querySelector('.projectlist').lastChild\n    const projectButtons = projectList.querySelectorAll('button')\n\n    projectButtons.forEach((button) => {\n    button.setAttribute('data-project-number', `${numberOfProjects - 1}`)\n    });\n\n    const viewButton = projectList.querySelector('.viewproject');\n    viewButton.addEventListener('click', (event) => {\n      var projectNumber = event.target.dataset.projectNumber\n      var project = projects[projectNumber]\n      currentProject = project\n\n      document.querySelector('tbody').innerHTML = ''\n      var projectToDos = project['items']\n\n      projectToDos.forEach((toDo) => { Object(_populate_ui_module_js__WEBPACK_IMPORTED_MODULE_1__[\"populateToDoItem\"])(toDo) })\n    })\n  }\n  \n  attachFunctions()\n\n  const newProject = function() {\n    var projectTitle = Object(_get_item_module_js__WEBPACK_IMPORTED_MODULE_0__[\"getProjectTitle\"])()\n    const project = Object(_project_module_js__WEBPACK_IMPORTED_MODULE_2__[\"createProject\"])(projectTitle)\n    project.number = numberOfProjects++\n    projects.push(project)\n    currentProject = project\n    Object(_populate_ui_module_js__WEBPACK_IMPORTED_MODULE_1__[\"populateProject\"])(projectTitle)\n    attachFunctions()\n  }\n\n  const newToDo = function() {\n    var itemDetails = Object(_get_item_module_js__WEBPACK_IMPORTED_MODULE_0__[\"getItemFromForm\"])()\n    const toDo = Object(_to_do_item_module_js__WEBPACK_IMPORTED_MODULE_3__[\"createToDoItem\"])(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3])\n    currentProject.addItem(toDo)\n    Object(_populate_ui_module_js__WEBPACK_IMPORTED_MODULE_1__[\"populateToDoItem\"])(toDo)\n  }  \n\n  return { newProject, newToDo };\n})();\n\n(function() {\n  document.getElementById('additem').addEventListener('click', () => {\n    const todoForm = document.getElementById('todoform')\n    if (todoForm.style.display === 'none') todoForm.style.display = 'block'\n    else todoForm.style.display = 'none'\n  })\n  \n  document.getElementById('addproject').addEventListener('click', () => {\n    const projectForm = document.getElementById('projectform')\n    if (projectForm.style.display === 'none') projectForm.style.display = 'block'\n    else projectForm.style.display = 'none'\n  })\n  \n  document.getElementById('submitproject').addEventListener(\n    'click', toDoListController.newProject)\n  \n  document.getElementById('submititem').addEventListener(\n    'click', toDoListController.newToDo)\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/populate-ui-module.js":
/*!***********************************!*\
  !*** ./src/populate-ui-module.js ***!
  \***********************************/
/*! exports provided: populateToDoItem, populateProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateToDoItem\", function() { return populateToDoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateProject\", function() { return populateProject; });\nconst populateToDoItem = function(item) {\n  const toDoTable = document.querySelector('tbody')\n  const toDoRow = document.createElement('tr')\n\n  for (let detail in item) {\n    const toDoDetail = document.createElement('td')\n    if (detail === 'itemNumber' || detail === 'toggleChecked') continue\n    if (detail === 'checked') {\n      const checkBox = document.createElement('input')\n      checkBox.setAttribute('type', 'checkbox')\n      if (item[detail] === true) {        \n        checkBox.setAttribute('value', 'true')\n        checkBox.setAttribute('checked')\n      } else {\n        checkBox.setAttribute('value', 'false')\n      }\n      toDoDetail.appendChild(checkBox)\n      toDoRow.appendChild(toDoDetail)\n    } else {\n    toDoDetail.textContent = item[detail]\n    toDoRow.appendChild(toDoDetail)\n    }\n  }\n\n  const deleteColumn = document.createElement('td')\n  const deleteButton = document.createElement('button')\n  deleteButton.textContent = \"Delete\"\n  deleteColumn.appendChild(deleteButton)\n  toDoRow.appendChild(deleteColumn)\n\n  const editColumn = document.createElement('td')\n  const editButton = document.createElement('button')\n  editButton.textContent = \"Edit\"\n  editColumn.appendChild(editButton)\n  toDoRow.appendChild(editColumn)\n\n  toDoTable.appendChild(toDoRow)\n}\n\nconst populateProject = function(name) {\n  const projectList = document.querySelector('.projectlist')\n\n  const newProject = document.createElement('li')\n  newProject.textContent = name\n  newProject.style.marginLeft = '23px'\n\n  const deleteButton = document.createElement('button')\n  deleteButton.textContent = 'Delete'\n  deleteButton.className = 'deleteproject'\n  deleteButton.style.margin = '5px'\n  newProject.appendChild(deleteButton)\n\n  const editButton = document.createElement('button')\n  editButton.textContent = 'Edit'\n  editButton.className = 'editproject'\n  editButton.style.margin = '5px'\n  newProject.appendChild(editButton)\n\n  const viewButton = document.createElement('button')\n  viewButton.textContent = 'View'\n  viewButton.className = 'viewproject'\n  viewButton.style.margin = '5px'\n  newProject.appendChild(viewButton)\n\n  projectList.appendChild(newProject)\n}\n\n\n\n//# sourceURL=webpack:///./src/populate-ui-module.js?");

/***/ }),

/***/ "./src/project-module.js":
/*!*******************************!*\
  !*** ./src/project-module.js ***!
  \*******************************/
/*! exports provided: createProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProject\", function() { return createProject; });\nconst createProject = (name) => {\n  const numberOfItems = { numberOfItems: 0}\n  const items = { items: []}\n  const addItem = {\n    addItem: function addItem(item) {\n      item.itemNumber = this.numberOfItems++\n      this.items.push(item)\n    }\n  }\n  const removeItem = {\n    removeItem: function removeItem(item) {\n      this.items.splice(item.itemNumber, 1)\n    }\n  }\n  return Object.assign({}, { name }, numberOfItems, items, addItem, removeItem)\n}\n\n\n\n//# sourceURL=webpack:///./src/project-module.js?");

/***/ }),

/***/ "./src/to-do-item-module.js":
/*!**********************************!*\
  !*** ./src/to-do-item-module.js ***!
  \**********************************/
/*! exports provided: createToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createToDoItem\", function() { return createToDoItem; });\n\n\nconst createToDoItem = (title, description, dueDate, priority) => {\n  const checked = { checked: false }\n  const toggleChecked = {\n    toggleChecked: function toggleChecked() {\n      if (this.checked === true) this.checked = false\n      else this.checked = true\n    }\n  }\n  \n  return Object.assign({}, {title, description, dueDate, priority}, checked, toggleChecked)\n}\n\n\n\n//# sourceURL=webpack:///./src/to-do-item-module.js?");

/***/ })

/******/ });