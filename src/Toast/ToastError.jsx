import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Message from './Message';


export default function ToastError({ status, children }) {

  console.log(status)
  const notifyError = () => {
    // toast.error(
    // <Message status={status} >
    //   {children}
    // </Message>, {position: toast.POSITION.BOTTOM_LEFT})


    toast(
      <div>
        {children}
      </div>
      , { position: toast.POSITION.BOTTOM_LEFT }
    )
  }

  return (
    <>
      <button onClick={notifyError} className='btn--notify'>Notify!</button>
      <ToastContainer
        toastClassName='Toast--error'
        progressClassName='Toastify__progress-bar--error'
      />
    </>
  );
}