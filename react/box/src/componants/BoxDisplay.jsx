import React from "react";

const BoxDisplay = (props) => {
    const {boxes} = props
    return (
        <div>
            {console.log(props.boxes)}
            {boxes.map((color) => {
                return (
                <div className="coloredBox" style={{backgroundColor: color, height: "50px", width: "50px"}}>
                </div>
                )
            })}
        </div>
    )
}

export default BoxDisplay
