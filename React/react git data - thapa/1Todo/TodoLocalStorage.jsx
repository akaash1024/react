
// ! look using todoKey
const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  return JSON.parse(localStorage.getItem(todoKey) || '[]')
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
