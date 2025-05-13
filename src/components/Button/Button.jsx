import React from 'react'
import './Button.css'

const Button = ({ label, icon }) => {
    return (
        <button className='button' aria-label='Main button'>
            {label}
            {icon}
        </button>
    )
}

export default Button