import React from "react"
import "./Button.scss"

const Button = ({ children }) => {
    return <button className='button button--primary'>{children}</button>
}

export default Button
