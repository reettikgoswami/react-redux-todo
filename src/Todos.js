import React from "react";
import { connect } from "react-redux";
import {TiTick} from "react-icons/ti";

import { deleteTodoAction, toggleTodoAction } from "./store/action";



const Todos = (props) => {
  function handleDelete(id) {
    props.dispatch(deleteTodoAction(id));
  }

  function toggleTodo(id) {
    props.dispatch(toggleTodoAction(id));
  }
  return (
    <ul>
      {props.allTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id = {todo.id}
              onChange={() => toggleTodo(todo.id)}
              checked={todo.isDone}
            />
            <label for={todo.id}><TiTick className={todo.isDone ? "":"tick"} /></label>

            <p className={todo.isDone ? "linethrough":""}>{todo.text}</p>
            <span onClick={() => handleDelete(todo.id)}>&#10005;</span>
          </li>
        );
      })}
    </ul>
  );
};

function mapStateToProps({ allTodos, activeTab }) {
  function filterTodo(todos, tab) {
    switch (tab) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((t) => t.isDone);
      case "active":
        return todos.filter((t) => !t.isDone);
      default:
        break;
    }
  }
  return {
    allTodos: filterTodo(allTodos, activeTab),
    activeTab,
  };
}
export default connect(mapStateToProps)(Todos);
