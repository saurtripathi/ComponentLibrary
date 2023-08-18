import React from 'react'
import classnames from "classnames"
import { FcOk } from "react-icons/fc"
import { IoMdWarning, IoIosCloseCircle } from "react-icons/io"
import { HiInformationCircle } from "react-icons/hi";
/**
 * Usages: <Banner status=<status> />
 * status : success | error | warning | neutral
 */

export default function Banner({children,status,banners,...rest }) {

    const backgroundColorClass = status ? status : ''
    const bannerClasses = classnames(backgroundColorClass, 'container', 'banner')

    console.log(status)
    const elment = children.filter(child => child.props.id===status)

    return (

        <div className={bannerClasses}  >
            {(status === 'success') && <FcOk style={{ width: 20, height: 20, color: '#34D399' }} />}
            {(status === 'warning') && <IoMdWarning style={{ width: 20, height: 20, color: '#FBBF24' }} />}
            {(status === 'error') && <IoIosCloseCircle style={{ width: 20, height: 20, color: '#F87171' }} />}
            {(status === 'neutral') && <HiInformationCircle style={{ width: 20, height: 20, color: '#60A5FA' }} />}

            <div className='container'>
                {elment}
            </div>

        </div>
    )
}