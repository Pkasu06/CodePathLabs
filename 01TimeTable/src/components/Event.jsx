import React from 'react'

const Event = ({ eventName = "" , color = "white", location = "Chicago"}) => {
    return (
        <>
            <td className={`event ${color}`}>
                <h5>{eventName}</h5>
                <h6>{location}</h6>
            </td>
        </>
    )
}

export default Event