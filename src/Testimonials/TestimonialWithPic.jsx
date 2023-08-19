import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { TestimonialsContext } from '../App';
export default function TestimonialWithPic({ imageSource, children }) {
    const { description, name, designation } = React.useContext(TestimonialsContext)
    console.log(children,description, name, designation)
    return (
        <div className='testimonials--card' style={{ backgroundColor: '#F9FAFB' }}>
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
    )
}