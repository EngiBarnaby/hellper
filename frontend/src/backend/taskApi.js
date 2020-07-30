import { backend } from './backend'

export  function taskListApi(callback){
    backend("GET", "task-list/", callback)
}

export  function taskToggleApi(id, data, callback){
    data.done = !data.done
    backend("POST", `task-update/${id}/`, callback, data)
}

export  function taskCreateApi(callback, data){
    data = {text : data}
    backend("POST", "task-create/", callback, data)
}

export  function taskDeleteApi(id, callback){
    backend("DELETE", `task-delete/${id}`, callback)
}