import React from 'react'

export default function Tooltip({ theme, colorVariant, closeIcon, picIcon, tooltipTitle, tooltipDescription }) {
    return (
        <>
            <div className='tooltip--box' id="tooltip--box">
                <div className={`tooltip--container bg--${theme}-${colorVariant}`}>
                    <div >
                        {picIcon}
                    </div>
                    <div className={`tooltip--p tooltip--${theme}-${colorVariant}`}>
                        <p >
                            {tooltipTitle}
                        </p>
                        <p >
                            {tooltipDescription}
                        </p>
                    </div>
                    <div className={`tooltip--close-btn tooltip--close-btn--${theme}-${colorVariant}`}>
                        {closeIcon}
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className={`tooltip--polygon tooltip--polygon-fill-${theme}-${colorVariant}`} viewBox="0 0 30 15" >
                    <path d="M15 15 L0.27757 0.75L29.7224 0.750003L15 15Z" />                    
                </svg>
            </div>
        </>
    )
}