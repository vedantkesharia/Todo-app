import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className ="container" style={{color:props.mode==='dark'?'white':'#2C3333',backgroundColor:props.mode==='dark'?'#2C3333':'white'}}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length===0? "No todos to display":
      props.todos.map((todo)=>{
        return (
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })
      }
      
    </div>
  )
}
