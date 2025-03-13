import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import LoadingView from '../LoadingView'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
}

const Carousel = () => {
  const [imgData, setImgsResponse] = useState({
    status: apiStatusConstants.initial,
    images: [],
  })

  useEffect(() => {
    const apiCall = async () => {
      setImgsResponse(prev => ({...prev, status: apiStatusConstants.loading}))
      const carouselResponse = await fetch(
        'https://json-data-1wm2.onrender.com/banners',
      )
      const carouselData = await carouselResponse.json()

      if (carouselResponse.ok === true) {
        setImgsResponse({
          status: apiStatusConstants.success,
          images: carouselData.banners,
        })
      } else {
        setImgsResponse({
          status: apiStatusConstants.failure,
          errorMsg: carouselData.error_msg,
        })
      }
    }
    apiCall()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  const renderResult = () => {
    const {status} = imgData
    switch (status) {
      case apiStatusConstants.loading:
        return <LoadingView />
      case apiStatusConstants.success:
        return renderSuccessView()
    }
  }

  const renderSuccessView = () => (
    <div>
      <div className="w-full relative">
        <Slider className="w-full" {...settings}>
          {imgData.images.map(img => (
            <div className="h-[80vh] w-full">
              <img className="h-full w-full " src={img.img} alt={img.alt} />
            </div>
          ))}
        </Slider>
        <Link
          to="/customize"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3"
        >
          <button className="w-full md:w-6/12 text-left bg-white text-black p-2 rounded-lg shadow-md border border-gray-300 focus:outline-none">
            Search...
          </button>
        </Link>
      </div>
      <div className="famous-places"></div>
    </div>
  )

  return <div>{renderResult()}</div>
}

export default Carousel
