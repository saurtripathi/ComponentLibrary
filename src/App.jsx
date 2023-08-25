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
/**
 * imports required for Toast component
 */
import Toast from './Toast/Toast';
import { LuCheckCircle2 } from "react-icons/lu";
import { PiWarningCircleBold } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RxCrossCircled } from "react-icons/rx";
import Message from './Toast/Message';
import Tooltip from './Tooltips/Tooltip';
import { RxCross2 } from "react-icons/rx";
import { ToggleSlider } from "react-toggle-slider";

const TestimonialsContext = React.createContext()
export default function App() {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(prevActive => prevActive = !prevActive)
  }
  const theme = active ? 'bold' : 'light'
  console.log(`theme : ${theme}`)
  const statusRef = React.useRef('success')
  console.log(statusRef.current)
  // const [status,setStatus] = React.useState(statusRef.current)
  const toastText = [
    {
      id: 1,
      toastStatus: 'success',
      icon: <LuCheckCircle2 style={{ width: 24, height: 24, color: '#34D399' }} />,
      toastStatusDescription: 'Your work has been saved'
    },
    {
      id: 2,
      toastStatus: 'warning',
      icon: <PiWarningCircleBold style={{ width: 24, height: 24, color: '#FBBF24' }} />,
      toastStatusDescription: 'A network error was detected'
    },
    {
      id: 3,
      toastStatus: 'error',
      icon: <RxCrossCircled style={{ width: 24, height: 24, color: '#F87171' }} />,
      toastStatusDescription: 'Please re-save your work again'
    },
    {
      id: 4,
      toastStatus: 'information',
      icon: <HiOutlineInformationCircle style={{ width: 24, height: 24, color: '#60A5FA' }} />,
      toastStatusDescription: 'Please read updated information'
    }
  ]

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
  const filteredToastElement = toastText.map(
    item => (item.toastStatus === statusRef.current) ?
      <Message key={statusRef.current}
        status={statusRef.current}
        icon={item.icon}
        toastStatus={item.toastStatus}
        toastStatusDescription={item.toastStatusDescription}
      />
      :
      null
  )

  return (
    <TestimonialsContext.Provider value={testimonialContents}>
      <main>
      <div className='div--toggleSlider'>
          <span>Dark</span>
          <ToggleSlider
            onToggle={handleToggle}
            flip={true}
            padding={5}
            handleSize={18}
            handleBackgroundColor={'black'}
            barHeight={26}
            barWidth={48}
            barBackgroundColor={'#dedede'}
            barBackgroundColorActive={'#06b7e7'}
            barTransitionType={'fade'}
          />
          <span>Light</span>
        </div>
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
            <div className='card--upload' style={{ backgroundColor: '#3F75FE' }}>
              <HiOutlineCloudUpload style={{ width: 24, height: 24, color: '#FFFFFF' }} />
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


        {/* <Testimonial imageSource="/MyImage.png" /> 
          <Testimonial /> */}

        {/* <Toast status={statusRef.current} >
          {filteredToastElement}
        </Toast> */}



        <Tooltip 
        theme={theme} 
        colorVariant={"green" } 
        picIcon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" >
            <path className={`stroke-color-${theme}-${"green "}`} d="M20 13V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V13M20 13V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V13M20 13H17.4142C17.149 13 16.8946 13.1054 16.7071 13.2929L14.2929 15.7071C14.1054 15.8946 13.851 16 13.5858 16H10.4142C10.149 16 9.89464 15.8946 9.70711 15.7071L7.29289 13.2929C7.10536 13.1054 6.851 13 6.58579 13H4" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        closeIcon={
          < RxCross2 
          style={{ color: '#C7C7C7', width: 20, height: 20 }}
          type="button" 
          onClick={() => document.getElementById('tooltip--box').remove()}
      />
        }
        tooltipTitle={'Archive notes'}
        tooltipDescription={'Archive notes Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.'}
        />




      </main>
    </TestimonialsContext.Provider>
  )
}

export { TestimonialsContext }


