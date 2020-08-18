import React, { useEffect, useState} from 'react'

import axios from 'axios'

const userApiUrl = "http://127.0.0.1:8000/user-api/user-complete-tasks/"

export default function Statistics(){

    const [statisticsData, setStatisticsData] = useState({})

    function getData() {
    
        axios.get(`${userApiUrl}`)
                .then(data => {
                    setStatisticsData(data["data"])
                    console.log(data["data"]);
                })
                .catch(error => console.log('error:', error));
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div className="container">
            <div>
                <div className="col-6 shadow-sm p-3 m-3 bg-white rounded">
                    <h4>
                        Выполнено заданий за сегодня :  {statisticsData['today_tasks_complete']}
                    </h4>   
                </div>
                <div className="col-6 shadow-sm p-3 m-3 bg-white rounded">
                    <h4>
                        Выполнено заданий за неделю :  {statisticsData['week_tasks_complete']}
                    </h4>   
                </div>
                <div className="col-6 shadow-sm p-3 m-3 bg-white rounded">
                    <h4>
                        Выполнено заданий за месяц :  {statisticsData['month_tasks_complete']}
                    </h4>   
                </div>
                <div className="col-6 shadow-sm p-3 m-3 bg-white rounded">
                    <h4>
                        Выполнено заданий за всё время :  {statisticsData['all_tasks_complete']}
                    </h4>   
                </div>
            </div>
        </div>
    )
}