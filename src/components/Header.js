import React, { useState } from "react";
import Middle from "./Middle";



const Header = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskData] = useState([]);
    const [check, setCheck] = useState([]); 
    const addTask = () => {
        setTaskData((taskList) => {
            const updateList = [...taskList,{ task: task, completed: false }]
            setTask('')
            
            return updateList
        })
    }
    const removeTask = (i) => {
        const updateTaskList = taskList.filter((elem, id) => {
            return id != i;
        })
        setTaskData(updateTaskList);
    }
    const toggleTaskCompletion = (i) => {
        setTaskData((taskList) => {
            const updatedTaskList = [...taskList];
            updatedTaskList[i] = {...updatedTaskList[i], completed: !updatedTaskList[i].completed
              };
          
          return updatedTaskList;
        });
      };
   
 
      <h1>
      <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
        <span class="wrap"></span>
      </a>
    </h1>

    return (
        <div className="container">
            <div>
                <h1>Things To Do</h1>
                
               
                <form onSubmit={(e)=> {
                    e.preventDefault()
                }}>
                    <input type="text" placeholder="Add a task" value={task} onChange={(e) => {
                        setTask(e.target.value)
                    }} />
                    <button onClick={addTask}>I got this</button>
                </form>
            </div>
            <Middle />
            <div className="footer">
                <ul className="todo-list">
                    
                        {taskList != [] && taskList.map((task, i) => {
                            return (
                                <>
                                <p key={i}>
                                <div className="todo">
                                    
                                    <li key={i} className={task.completed? "completed": null}>{task.task}</li>
                                    <button onClick={() => toggleTaskCompletion(i)} name="crossBtn" className="checkMark round ">
                                        <i className="fa-solid fa-check"></i>
                                    </button>

                                    <button onClick={()=> removeTask(i)} className="delete round" name="deleteBtn">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                                </p>
                                </>
                            )
                        })}

                    
                </ul>
            </div>
            <div className="endFooter">
                <p>Made with ❤ by Anshul</p>
            </div>


        </div>
    )
}
export default Header;
