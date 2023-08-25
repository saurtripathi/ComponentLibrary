import React from 'react'




export default function Message({ status, icon, toastStatus, toastStatusDescription }) {
    // console.log(status, children)

    return (
        <>
            <div key={status} className={`${status}-div`} >
                <span className='icon--size'>{icon}</span>
                <div className='msg--p'>
                    <p
                        id='odd'
                        className='Toastify__toast--msg-child-odd'
                    >
                        {toastStatus}
                    </p>
                    <p
                        id='even'
                        className='Toastify__toast--msg-child-even'
                    >
                        {toastStatusDescription}
                    </p>
                </div>

            </div>
        </>
    )
}