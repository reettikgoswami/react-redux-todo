import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import Footer from "./Footer";
import { addTodoAction , toggleAll} from "./store/action";

import {FaChevronDown} from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
    };
  }
  handleAddTodo = (event) => {
    this.setState({ todoInput: event.target.value });
  };
  addTodo = (event) => {
    if(event.keyCode === 13 && this.state.todoInput.trim()){
    this.props.dispatch(addTodoAction(this.state.todoInput));
    this.setState({ todoInput: "" });
    }
  };
  handleAllToggle=()=>{
    this.props.dispatch(toggleAll());
  }

  render() {
    return (
      <>
      <h1 className="todo_heading">todos</h1>
      <div className="container">
     <div className="header">
     <div className="flex">
       <div className="toggle_img_container" onClick={this.handleAllToggle} >
         <FaChevronDown/>
       </div>
       <input
         type="text"
         id="input_todo"
         value={this.state.todoInput}
         onChange={this.handleAddTodo}
         onKeyDown={this.addTodo}
        placeholder="What needs to be done?"
      />
    </div>
    </div> 
        <Todos />
        <Footer />
      </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { allTodos: state.allTodos };
}

export default connect(mapStateToProps)(App);

