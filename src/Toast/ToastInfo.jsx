import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ToastInfo({ status, children }) {

  const notifyInfo = () => {
    toast(
      <div>
        {children}
      </div>
      , { position: toast.POSITION.BOTTOM_LEFT })
  }

  return (
    <>
      <button onClick={notifyInfo} className='btn--notify' >Notify!</button>
      <ToastContainer
        toastClassName='information'
        progressClassName='Toastify__progress-bar--info' />
    </>
  );
}