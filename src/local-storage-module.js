function storeToStorage(objectArray) {
  localStorage.setItem("objects", JSON.stringify(objectArray));
}

function getFromStorage() {
  return JSON.parse(localStorage.getItem("objects"));
}

export { storeToStorage, getFromStorage };
