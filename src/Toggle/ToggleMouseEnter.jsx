import React from 'react'
import { ToggleContext } from './Toggle'

export default function ToggleMouseEnter({ children }) {
    const { on, toggle } = React.useContext(ToggleContext)
    console.log(children)
    return (
        on ? <div onMouseEnter={toggle}>
            {children}
        </div> : null
    )
}