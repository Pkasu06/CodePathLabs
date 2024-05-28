import React from 'react'
import Event from './Event'

const Calendar = () => {
    const tableHeadings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const timings = ["8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"]
    return (
        <div className='calendar'>
            <table>
                <thead>
                    <tr>
                        <th>Time Slots</th>
                        {tableHeadings.map((heading) => <th key={heading}>{heading}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='time'>{timings[0]}</td>
                        <Event eventName="Starbucks ☕️" color="green"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Yolk 🍳" color="pink"/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='time'>{timings[1]}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Subway 🚊" color="yellow"/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='time'>{timings[2]}</td>
                        <td></td>
                        <td></td>
                        <Event eventName="The Bean" color="blue"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='time'>{timings[3]}</td>
                        <Event eventName="River Cruise" color="green"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='time'>{timings[4]}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Restaurant" color="yellow"/>
                    </tr>
                    <tr>
                        <td className='time'>{timings[5]}</td>
                        <td></td>
                        <td></td>
                        <Event eventName="Dinner Date" color="orchid"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='time'>{timings[6]}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Beach" color="blue"/>
                    </tr>
                    <tr>
                        <td className='time'>{timings[7]}</td>
                        <td></td>
                        <td></td>
                        <Event eventName="Museum" color="orange"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='time'>{timings[8]}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Games" color="green"/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='time'>{timings[9]}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event eventName="Shopping" color="purple"/>
                    </tr>
                    {/* {timings.map((timeSlot) => {
                        return (
                            <tr>
                                <td className='time'>{timeSlot}</td>
                                {tableHeadings.map((heading) => <Event eventName="fancy dinner" color="green"/>)}
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar