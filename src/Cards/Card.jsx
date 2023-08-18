import React from 'react'
import { HiCloudUpload } from "react-icons/hi";
export default function Card({icon,children}) {
    const styles = {
        width:24,
        height:24,
        color:'#FFFFFF'
    }
    console.log(icon)
    return (
        <>

            <div className='card'>
                    {
                    icon ? 
                    icon : 
                    <div className='card--upload' style={{backgroundColor:'#3F75FE' }}>
                    <HiCloudUpload style={styles}/>
                    </div>
                    }
                <div className='card--container'>
                    {children}
                </div>
            </div>
        </>
    )
}