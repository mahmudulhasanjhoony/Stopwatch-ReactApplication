import React from 'react'

const Laps = (props) => {


    return (
        <ul className="list-group list-item-flush mx-auto">
            {props.laps.map((lap, index) => {
                return (
                    <li key={index} className="list-group-item">
                        <span className="text-dark">Minute: </span>
                        <span className="text-danger">{lap.min},</span>
                        <span className="text-dark"> Second: </span>
                        <span className="text-danger">{lap.sec},</span>
                        <span className="text-dark"> Mili: </span>
                        <span className="text-danger">{lap.mili}</span>
                    </li>
                )
            })}

        </ul>
    )
}

export default Laps