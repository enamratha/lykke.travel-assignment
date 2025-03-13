import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import DestinationCard from '../../components/DestinationCard'
import LoadingView from '../../components/LoadingView'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
}

const Destination = props => {
  const [response, setResponse] = useState({
    data: [],
    status: apiStatusConstants.initial,
  })
  const {handle} = useParams()

  useEffect(() => {
    const call = async () => {
      setResponse(prev => ({...prev, status: apiStatusConstants.loading}))
      const destionationResponse = await fetch(
        `https://json-data-1wm2.onrender.com/destination/${handle}`,
      )
      const destinationData = await destionationResponse.json()
      const formattedData = destinationData.trips.map(trip => ({
        id: uuidv4(),
        tripName: trip['trip-name'],
        price: trip.price,
        image: trip.image,
        amenities: trip.amenities,
        duration: trip.duration,
      }))
      if (destionationResponse.ok === true) {
        setResponse({
          data: formattedData,
          status: apiStatusConstants.success,
        })
      } else {
        setResponse({
          status: apiStatusConstants.failure,
        })
      }
    }
    call()
  }, [])

  const renderSuccessView = () => {
    const {data} = response
    return (
      <div>
        <h1>Our Trips</h1>
        <ul className="md:flex p-0 md:p-4 min-h-screen flex flex-col md:flex-row justify-center">
          {data.map(trip => (
            <DestinationCard key={trip.id} trip={trip} />
          ))}
        </ul>
      </div>
    )
  }

  const renderResults = () => {
    const {status} = response
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
    <div className="p-3 flex flex-col bg-gradient-to-b from-white from-20% via-emerald-50 via-60% to-sky-200 to-90%">
      <div>{renderResults()}</div>
      <Link to="/get-in-touch" className="relative my-3">
        <button
          className="text-black bg-linear-to-r from-emerald-100 to-amber-100"
          type="button"
        >
          Talk to an expert
        </button>
      </Link>
    </div>
  )
}

export default Destination
