import React from 'react'
import Taskitem from './Taskitem'

const url = "http://127.0.0.1:8000/api/task-list/"

class Todo extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data : []
        }
    }


    componentDidMount(){
        const url = "http://127.0.0.1:8000/api/task-list/"
        fetch(url)
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({
                        data : data,
                    })
                    console.log(data);
                },
                (error) => {
                    console.log(error);
                }
            ).catch(error => console.log(error))
        }

        render(){
            const { data } = this.state
            return(
                <div>
                    <h1>Hiiiii</h1>
                    <h1>Hiiiii</h1>
                    <ul>
                        {data.map(item =>(
                            <Taskitem 
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </ul>
                </div>
            )
        }
}  


export default Todo