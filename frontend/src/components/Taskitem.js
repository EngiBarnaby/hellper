import React from 'react'

import { TaskButtons } from './TaskButtons'

function Taskitem({task, toggleTask, changeStattus}){

    const classDone = []

    if(task.done){
        classDone.push('done')
    }


    return (
        <div className={classDone.join(' ')}>
            <div 
                onClick={() => toggleTask(task.id, task)}
                className="border rounded p-3 mb-4 task-item">
                <div
                    className="row justify-content-center align-items-center">
                    <div  
                        className="col-10">
                        <span>
                            {task.text}
                        </span>
                    </div>
                    <div className="ml-auto mr-2">
                        <TaskButtons 
                            changeStattus={changeStattus}
                            id={task.id}
                        />
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Taskitem