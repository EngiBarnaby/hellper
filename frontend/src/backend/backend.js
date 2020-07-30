
export function backend(method, endpoint, callback, data){
    let jsonData;
    if(data){
        jsonData = JSON.stringify(data)
    }
    fetch(`http://127.0.0.1:8000/api/${endpoint}`, 
    {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body:jsonData,
    })
    .then(response => {
        return response.json()
    }
    //     {
    //     if(response.ok){
    //       return response.json()
    //     }
    //     response.json().then( error => {
    //         const e = new Error('Что-то пошло не так')
    //         e.data = error
    //         throw e
    //     })
    // }
    )
    .then(
        (data) => { callback(data) }
    ).catch(error => console.log(error))
}

