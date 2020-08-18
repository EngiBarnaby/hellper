import React from 'react'

import { TaskButtons } from './TaskButtons'

function Taskitem({task, toggleTask, changeStattus}){

    const classDone = []

    if(task.done){
        classDone.push('done')
    }

    return (
        <div className={classDone.join(' ')}>
            <div className="container-fluid">
                <div className="row border p-2 mb-4 rounded todo-item d-flex align-items-center">
                    <div className="col-10"
                        onClick={() => toggleTask(task.id, task)}
                        >
                        <span>{task.text}</span>
                    </div>
                    <div className="col-1 ml-auto">
                        { classDone[0] ? <i className="check-icon fas fa-check fa-2x"></i> : null}
                    </div>
                    <div className="ml-auto mr-3">
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