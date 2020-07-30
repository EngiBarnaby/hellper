import React from 'react'
import { taskDeleteApi } from '../backend/taskApi'

export function TaskButtons({changeStattus, id}){

    function deleteTask(){
        taskDeleteApi(id, changeStattus)
    }

    return (
        <div className="trash-button">
            <i 
                onClick={deleteTask}
                className="fas fa-trash-alt">
            </i>
        </div>
    )
}