import React from "react";
import { connect } from "react-redux";
import { changeTabAction , clearCompleteTask } from "./store/action";

const Footer = (props) => {
  function handleActiveTab(tab) {
    props.dispatch(changeTabAction(tab));
  }
  function remainingTaskCount(){
   return  props.allTodos.filter(todo=> !todo.isDone).length;
  }
  function completedTaskCounter(){
    return props.allTodos.filter(todo=> todo.isDone).length;
  }
  const clearComplete =()=>{
   props.dispatch(clearCompleteTask());
  }
  return (
     <div className={props.allTodos.length ? "footer" : "footer footer_hidden"}>
      <div className="footer_strip">
         <div className="item_count">
           <span className="counter">{remainingTaskCount()} </span>
           items left
         </div>
         <div className="item_status">
           <button id="all_button" className={props.activeTab === "all" ? "active" : ""}
          onClick={() => handleActiveTab("all")} href="">All</button>
           <button id="active_button" href="" className={props.activeTab === "active" ? "active" : ""}
        onClick={() => handleActiveTab("active")}>Active</button>
           <button id="completed_button" className={props.activeTab === "completed" ? "active" : ""}
        onClick={() => handleActiveTab("completed")} href="">
             Completed
           </button>
         </div>
         <div className={completedTaskCounter()>0?"item_completed_1":"item_completed"} onClick={()=>clearComplete()}>
           Clear Completed
         </div>
       </div>
     </div>
  );
};
function mapState(state) {
  return { activeTab: state.activeTab , allTodos: state.allTodos};
}

export default connect(mapState)(Footer);


