const DestinationCard = props => {
  const {trip} = props
  const {tripName, amenities, price, duration} = trip
  let {image} = trip
  if (image === undefined) {
    image =
      'https://img.freepik.com/premium-photo/monuments-world-glass-water_117023-837.jpg?w=1480'
  }
  return (
    <li className="bg-white w-100 my-2 md:mx-5 p-3 rounded-xl shadow-md">
      <img className="rounded-md h-[50%] w-100" src={image} alt={tripName} />
      <h2 className="font-semibold text-3xl my-3">{tripName}</h2>
      <p>price: Rs.{price}</p>
      <p>duration: {duration}</p>
      <hr className="my-3" />
      <h2>Amenities</h2>
      <ul className="">
        {amenities.map(each => (
          <li className="my-2" key={each}>
            {each}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default DestinationCard
