import React, {useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2'

const Chart = params => {
    const [currentSevenDays,setCurrentSevenDays] = useState()
    const [previousSevenDays,setPreviousSevenDays] = useState()
    

    // unpacking of data; and assigning of last 7 or less days of data to values; and the other 7 or less days of past to a variable
    useEffect(() =>{
        if (!params.loading && params.data){
            let lastSevenDays = params.data.slice(-7).map(item =>item.rainData)
            setCurrentSevenDays(lastSevenDays)

            let beforeSevenDays = params.data.slice(-14, -7).map(item =>item.rainData)
            setPreviousSevenDays(beforeSevenDays)
        }

    },[])

    const rainData =
    {
        
        // x axis to name days of the week.
        labels:[
            'Day 1',
            'Day 2',
            'Day 3',
            'Day 4',
            'Day 5',
            'Day 6',
            'Day 7'
        ],
        // array of objects. each object corresponds to a single line/ 1 week worth of rainfal data i.e amount of rainfall in MM
        datasets:[
            {
                label:'Current 7 days (mm)',
                data:currentSevenDays,
                borderColor:['#136a8a'],
                pointBackgroundColor:['#267871'],
                pointBorderColor:['#267871'],
            },
            {
                label:'Previous 7 days(mm)',
                data:previousSevenDays,
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
