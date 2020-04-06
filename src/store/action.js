import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_TAB, CLEAR_COMPLETE , TOGGLE_ALL} from "./types";

export let addTodoAction = (payload) => {
  return { type: ADD_TODO, payload };
};
export let deleteTodoAction = (payload) => {
  return { type: DELETE_TODO, payload };
};
export let toggleTodoAction = (payload) => {
  return { type: TOGGLE_TODO, payload };
};
export let changeTabAction = (payload) => {
  return { type: CHANGE_TAB, payload };
};
export let clearCompleteTask = () => {
  return { type : CLEAR_COMPLETE };
}
export let toggleAll = () =>{
  return { type : TOGGLE_ALL };
}
