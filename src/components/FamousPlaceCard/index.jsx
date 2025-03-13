import {Link} from 'react-router-dom'
import {TfiNewWindow} from 'react-icons/tfi'

import './index.css'

const FamousPlaceCard = props => {
  const {place} = props
  const {title, handle, img} = place

  return (
    <li className="container md:w-4/12 py-5 md:p-5 flex flex-col">
      <img className="image h-72 w-11/12" src={img} alt="feature-place" />
      <h2>{title}</h2>
      <div className="middle">
        <Link to={`/destination/${handle}`}>
          <div className="flex items-center">
            <span className="text-black">Explore Now</span>
            <span className="text-black mx-2 font-semibold">
              <TfiNewWindow />
            </span>
          </div>
        </Link>
      </div>
    </li>
  )
}

export default FamousPlaceCard
