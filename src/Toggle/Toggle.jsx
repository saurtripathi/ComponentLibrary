import React from 'react'

const ToggleContext = React.createContext()

export default function Toggle({ children }) {

    const [on, setOn] = React.useState(true)
    function toggle() {
        console.log('clicked')
        setOn(prevOn => !prevOn)
    }
    // console.log(children)
    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}
export { ToggleContext }