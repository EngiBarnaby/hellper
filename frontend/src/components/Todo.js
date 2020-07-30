import React, { useState, useEffect } from 'react'


import Taskitem from './Taskitem'

import { TaskCreate } from './TaskCreate'
import { taskListApi, taskToggleApi } from '../backend/taskApi'

function Todo() {
    const [data, setData] = useState([])
    const [statusUpdate, setStatusUpdate] = useState(false)
     


    useEffect(() => {
        const handleTaskListApi = (data) => {
            setData(data)
        }
        taskListApi(handleTaskListApi)
        console.log("Обновление данных");
        setStatusUpdate(false)
      }, [statusUpdate])


      const changeStattus = () => {
        setStatusUpdate(true)
      }

    // const handleSubmitTask = () => {
    //     setStatusUpdate(true)
    // }

    // const handleDeleteTask = () => {
    //     setStatusUpdate(true)
    // }


    const handleToggleTask = (currentData) => { 
        setData(
            data.map( task => {
                if(task.id === currentData.id){
                    task.done = currentData.done
                }
                return task
            })
        )
        setStatusUpdate(true)
    }

    const toggleTask = (id, task) => {
        taskToggleApi(id, task, handleToggleTask)
    }

    const todoListAtive = data.filter(item => !item.done)
    const todoListDone = data.filter( item => item.done)

            return(
                <div className="todo">
                    <div className='row justify-content-center'>
                        <TaskCreate handleSubmitTask={changeStattus}/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-7 col-4-md">
                                {[...todoListAtive, ...todoListDone].map(item =>(
                                    <Taskitem 
                                        key={item.id}
                                        task={item}
                                        toggleTask={toggleTask}
                                        changeStattus={changeStattus}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            )
}  


export default Todo