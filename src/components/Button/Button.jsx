import React from 'react'
import './Button.css'

const Button = ({ label }) => {
    return (
        <button className='button' aria-label='Main button'>{label}</button>
    )
}

export default Button