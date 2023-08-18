import React from 'react'
import { ToggleContext } from './Toggle'

export default function ToggleOff({children}){
    const {on,toggle} = React.useContext(ToggleContext)
    console.log(on)
    return (
        // <div onClick={toggle}>
        //     {children}
        // </div>
        !on ? <div  onClick={toggle}>
            {children}
        </div>:null
        
    )
}