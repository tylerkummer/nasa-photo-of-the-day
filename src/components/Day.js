import React from "react";

const DayIncrease = ({day}) => {
    return (
        <div>
            <button onClick = {day + 1}>Tomorrow</button>
            <button onClick = {day -1}>Yesterday</button>
        </div>
    )
}

export default DayIncrease;