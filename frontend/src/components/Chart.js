import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = () => {
    

    const rainData =
    {
        
        // x axis to name days of the week.
        labels:[
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        // array of objects. each object corresponds to a single line/ 1 week worth of rainfal data i.e amount of rainfall in MM
        datasets:[
            {
                label:'week 3 of October 2021(mm)',
                data:[3,2,2,4,5,6,7],
                borderColor:['#136a8a'],
                pointBackgroundColor:['#267871'],
                pointBorderColor:['#267871'],
            },
            {
                label:'week 2 of October 2021(mm)',
                data:[1, 0, 4, 3.4, 1.1, 1.4, 3],
                borderColor:['#6441A5'],
                pointBackgroundColor:['#2a0845'],
                pointBorderColor:['#2a0845'],
            }
        ]
    }
    return (
        <div>
            <Line data = {rainData} height={110} />
        </div>
    )
}

export default Chart
