import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { TestimonialsContext } from '../App';
export default function Testimonial({ imageSource, children }) {
    // console.log(imageSource ? 'hi' : 'bye')

    const { description, name, designation } = React.useContext(TestimonialsContext)
    console.log(description, name, designation)
    if (imageSource) return <div className='testimonials--card' style={{ backgroundColor: '#F9FAFB' }}>
        <div className='testimonials--container'>
            <div className='testimonials--wrapper'>
                <div className='testimonials--wrapper--container'>
                    <ImQuotesLeft />
                    <p>
                        {description}
                    </p>
                    <div className='testimonials--signature'>
                        <span>
                            {name}
                        </span>
                        <span>
                            {designation}
                        </span>
                    </div>

                </div>
            </div>
        </div>
        <div >
            <img className='testimonials--pic' src={imageSource} alt='Candidate Picture' />
        </div>
    </div>
    if (!imageSource) return (
        <div className='testimonials--card' style={{ padding: 0 }}>
            <div className='testimonials--container' style={{ backgroundColor: '#F9FAFB' }}>
                <div className='testimonials--wrapper'>

                    <div className='testimonials--wrapper--container testimonials--wrapper--container--alt'>
                        <div className='testimonials--logo'>
                            <img src='/MyLogo.jpg' style={{ width: 180, height: 120 }} />
                        </div>
                        <p className='testimonials--p-no-image' style={{ color: '#111827' }}>
                            {description}
                        </p>
                        <div className='testimonials--signature testimonials--signature--alt'>
                            <span style={{ color: '#111827' }}>
                                {name}
                            </span>
                            <img src="/Divider.png" className='slash' />
                            <span style={{ color: '#6B7280' }}>
                                {designation}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}