import React from 'react'
import { ToggleContext } from './Toggle'

export default function ToggleOn({ children }) {
    const { on, toggle } = React.useContext(ToggleContext)
    return (
        on ? <div onClick={toggle}>
            {children}
        </div> : null
    )
}