import React from 'react'
import { useParams } from 'react-router-dom'

const Input = () => {
  const { word, color, backgroundColor } = useParams();
  console.log(word, color, backgroundColor)

  let style = {}
  if (color) {
    style.color = color;
    style.backgroundColor = backgroundColor;
  }

  return (
    <div>
      {
        isNaN(word)
        ? <p style={style}>The word is: {word}</p>
        : <p>The number is: {word}</p>
      }
    </div>
  )
}

export default Input
