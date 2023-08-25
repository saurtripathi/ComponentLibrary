import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Message from './Message';


export default function ToastWarning({ status, children }) {

  // const {toastStatus,toastStatusDescription} = toastText.filter(item => (item.toastStatus === status) ? item : null)


  const notifyWarning = () => {
    // toast.warning(
    // <Message>
    //   {children}
    // </Message>, {position: toast.POSITION.BOTTOM_LEFT})

    toast(
      <div id="myid">
        {children}
      </div>
      , { position: toast.POSITION.BOTTOM_LEFT })
  }

  return (
    <>
      <button onClick={notifyWarning} className='btn--notify' >Notify!</button>
      <ToastContainer
        toastClassName='toast--warning'
        progressClassName='Toastify__progress-bar--warning'
      />
    </>
  );
}