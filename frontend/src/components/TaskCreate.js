import React from 'react'

import  { taskCreateApi } from '../backend/taskApi'

export function TaskCreate({handleSubmitTask}){

    const taskText = React.createRef()

    const submitTask = (value) => {
        event.preventDefault()
        taskCreateApi(handleSubmitTask, value)
        taskText.current.value = ''
    }

    return(
        <div className="task-input col-7 col-4-md mb-3 mt-3">
            <form 
                className="input-group"
                onSubmit={() => submitTask(taskText.current.value)}>
                <input type="text" className="form-control" ref={taskText}/>
                <div className="input-group-append">
                <button
                    className='btn btn-outline-success'   
                    type="submit">
                    Добавить
                </button>
                </div>
            </form>
        </div>
    )
}