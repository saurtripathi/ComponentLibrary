import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ToastError from './ToastError';
import ToastInfo from './ToastInfo';
import ToastSuccess from './ToastSuccess';
import ToastWarning from './ToastWarning.jsx';
import "react-toastify/dist/ReactToastify.css";


export default function Toast({ status, children }) {
    // const {toastStatus,toastStatusDescription} = toastText.filter(item => (item.toastStatus === status) ? item : null)
    // const [filteredToast] = toastText.filter(item => (item.toastStatus === status) ? item : null)

    console.log(status)
    if (status === 'success')

        return (
            <ToastSuccess status={status}>
                {children}
            </ToastSuccess>
        )
    if (status === 'warning')

        return (
            <ToastWarning status={status}>
                {children}
            </ToastWarning>
        )
    if (status === 'error')

        return (
            <ToastError status={status}>
                {children}
            </ToastError>
        )
    if (status === 'information')

        return (
            <ToastInfo status={status}>
                {children}
            </ToastInfo>
        )

}