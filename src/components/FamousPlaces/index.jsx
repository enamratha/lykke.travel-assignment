import {useState, useEffect} from 'react'

import FamousPlaceCard from '../FamousPlaceCard'
import LoadingView from '../LoadingView'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const FamousPlaces = () => {
  const [famousPlaces, setFamplacesData] = useState({
    data: [],
    errorMsg: null,
    status: apiStatusConstants.initial,
  })

  useEffect(() => {
    const call = async () => {
      setFamplacesData(prev => ({...prev, status: apiStatusConstants.loading}))
      const famPlcsResponse = await fetch(
        'https://json-data-1wm2.onrender.com/featured-destination',
      )
      const resData = await famPlcsResponse.json()

      if (famPlcsResponse.ok === true) {
        setFamplacesData({
          status: apiStatusConstants.success,
          data: resData.destination,
        })
      } else {
        setFamplacesData({
          status: apiStatusConstants.failure,
        })
      }
    }
    call()
  }, [])

  const renderSuccessView = () => {
    const {data} = famousPlaces
    return (
      <div className="p-3">
        <h1 className="text-left mt-5">Featured Places</h1>
        <ul className="w-screen flex justify-center flex-wrap mt-5">
          {data.map(place => (
            <FamousPlaceCard key={place.handle} place={place} />
          ))}
        </ul>
      </div>
    )
  }

  const renderResults = () => {
    const {status} = famousPlaces
    switch (status) {
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.loading:
        return <LoadingView />
      default:
        return
    }
  }

  return (
    <div className="bg-linear-to-r from-emerald-50 to-amber-100">
      {renderResults()}
    </div>
  )
}

export default FamousPlaces
