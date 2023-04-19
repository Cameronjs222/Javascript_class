import React from "react";

const BoxDisplay = (props) => {
    const {boxes, boxSize} = props
    return (
        <div className="container">
            {console.log(props.boxSize)}
            {boxes.map((color, index) => {
                return (
                <div key={index} className="coloredBox" style={{backgroundColor: color, width: boxSize[index]+"px", height: boxSize[index]+"px"}}>
                </div>

                )
            })}
        </div>
    )
}

export default BoxDisplay
