import React from "react"
import "./Button.scss"

const Button = ({ children }) => {
    return <button className='button button--primary__outline'>{children}</button>
}

export default Button
