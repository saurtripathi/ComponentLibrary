import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import TestimonialWithPic from './TestimonialWithPic';
import TestimonialWithoutPic from './TestimonialWithoutPic';

import { TestimonialsContext } from '../App';
export default function Testimonial({ imageSource, children }) {
    // console.log(imageSource ? 'hi' : 'bye')

    const { description, name, designation } = React.useContext(TestimonialsContext)
    console.log(description, name, designation,imageSource)

    return imageSource ? <TestimonialWithPic imageSource={imageSource} /> :  <TestimonialWithoutPic />

}