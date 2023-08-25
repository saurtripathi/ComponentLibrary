import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { TestimonialsContext } from '../App';

export default function TestimonialWithoutPic({ imageSource, children }) {
    const { description, name, designation } = React.useContext(TestimonialsContext)
    console.log(imageSource, description, name, designation)
    return (
        <div className='testimonials--card' style={{ padding: 0 }}>
            <div className='testimonials--container' style={{ backgroundColor: '#F9FAFB' }}>
                <div className='testimonials--wrapper'>

                    <div className='testimonials--wrapper--container testimonials--wrapper--container--alt'>
                        <div className='testimonials--logo'>
                            <img src='/MyLogo.jpg' style={{ width: 100, height: 60 }} />
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