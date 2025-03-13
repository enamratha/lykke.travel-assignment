import {useState} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const destinations = [
  'Bhutan',
  'Maldives',
  'Egypt',
  'Bali',
  'Dubai',
  'Japan',
  'Australia',
  'Thailand',
]
const Customize = () => {
  const [search, changeSearch] = useState('')
  const [places, setPlaces] = useState(destinations)

  const onChangeSearchInput = event => {
    changeSearch(event.target.value)
    setPlaces(
      destinations.filter(dest =>
        dest.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    )
  }

  return (
    <div className="customize-bg min-h-screen flex flex-col md:flex-row justify-between items-center bg-radial from-sky-50 from-40% to-amber-100">
      <div className="flex flex-col items-center p-5 w-100 md:w-6/12 h-full ">
        <input
          value={search}
          onChange={onChangeSearchInput}
          type="search"
          placeholder="pick your destination"
          className="w-100"
        />
        <ul className="p-5 w-100">
          {places.map(place => (
            <Link
              to={`/custom/${place.toLowerCase()}`}
              key={place.toLowerCase()}
              className="text-black m-3 w-100"
            >
              <li className="p-2 px-3 bg-white rounded-xl text-black border-1 border-black w-10/12">
                {place}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-5/12 h-full px-auto">
        <img
          className="h-full w-full"
          src="https://purepng.com/public/uploads/large/globe-w6x.png"
          alt="travel"
        />
      </div>
    </div>
  )
}

export default Customize
