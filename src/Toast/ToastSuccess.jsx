import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Message from './Message';


export default function ToastSuccess({ children }) {

    console.log(children)

    const notifySuccess = () => {

        // toast.success(
        //     <Message>
        //         {children}
        //     </Message>, { position: toast.POSITION.BOTTOM_LEFT })

        toast(
            <div>
                {children}
            </div>
            , { position: toast.POSITION.BOTTOM_LEFT })

    }

    return (
        <>
            <button onClick={notifySuccess} className='btn--notify' >Notify!</button>
            <ToastContainer
                toastClassName='Toast--success'
                progressClassName='Toastify__progress-bar--success'
            />
        </>
    );
}