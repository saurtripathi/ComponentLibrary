import React, { useState } from 'react'
import { HiOutlineCloudUpload } from "react-icons/hi";
import './App.css'
// import Badge from './Badges/Badge'
import Banner from './Banners/Banner'
import Toggle from './Toggle/index'
// import ToggleOn from './Toggle/ToggleOn'
// import ToggleOff from './Toggle/ToggleOff'
import Card from './Cards/Card'
import ToggleMouseEnter from './Toggle/ToggleMouseEnter'
// import ToggleMouseLeave from './Toggle/ToggleMouseLeave'
import Testimonial from './Testimonials/Testimonial';


const TestimonialsContext = React.createContext()
export default function App() {


  const banners = [
    {
      title: "Congratulations!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
      status: "success"
    },
    {
      title: "Attention!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
      status: "warning"
    },
    {
      title: "There is a problem with your application!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
      status: "error"
    },
    {
      title: "Update available!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
      status: "neutral"
    }
  ]

  const testimonialContents = {
    description: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
    name: 'Saurabh Tripathi',
    designation: 'Freelance Frontend Developer'
  }
  const bannersElementsMultiline = banners.map(banner =>
    <div id={banner.status} key={banner.status}>
      <p className={`${banner.status}-title-color`}>{banner.title}</p>
      <p className={`${banner.status}-text-color`} >{banner.text}</p>
    </div>
  )
  const bannersElementsSingleline = banners.map(banner =>
    <div id={banner.status} key={banner.status}>
      <p className={`${banner.status}-title-color`}>{banner.title}</p>
    </div>
  )

  return (
    <TestimonialsContext.Provider value={testimonialContents}>
      <main>
        {/* <Toggle>
        <Toggle.On>
          <Banner status="success" banners={banners}  >
            {bannersElementsMultiline}
          </Banner>
        </Toggle.On>
        <Toggle.Off>
          <Banner status="success" banners={banners}  >
            {bannersElementsSingleline}
          </Banner>
        </Toggle.Off>
      </Toggle> */}
        {/* <Card 
            icon={
              <div className='card--upload' style={{backgroundColor:'#3F75FE' }}>
                    <HiOutlineCloudUpload style={{ width: 24, height: 24, color: '#FFFFFF'  }} />
              </div>
              }
          >
            <h1>
              Easy Deployment
            </h1>
            <p>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </p>
          </Card> */}


        {/* <Testimonial imageSource="/MyImage.png" /> */}
        <Testimonial />




      </main>
    </TestimonialsContext.Provider>
  )
}

export { TestimonialsContext }


