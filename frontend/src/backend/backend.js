
    function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export function backend(method, endpoint, callback, data){
    let jsonData;
    const csrftoken = getCookie('csrftoken');
    if(data){
        jsonData = JSON.stringify(data)
    }
    fetch(`http://127.0.0.1:8000/api/${endpoint}`, 
    {
        method: method,
        headers: {
            'X-CSRFToken': csrftoken,
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
        (data) => {
         callback(data) 
        }
    ).catch(error => console.log(error))
}

