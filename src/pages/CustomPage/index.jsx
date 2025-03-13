import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

const tabs = ['durationRecord', 'personsRecord', 'citiesRecord']
const durations = [
  {
    id: uuidv4(),
    img: 'https://images.pickyourtrail.com/duration_option_1_0c9e8e2380.png?auto=format&fit=crop&w=256&q=75',
    days: '3-4 nights',
  },
  {
    id: uuidv4(),
    img: 'https://images.pickyourtrail.com/duration_option_2_66500bfd72.png?auto=format&fit=crop&w=256&q=75',
    days: '5-6 nights',
  },
  {
    id: uuidv4(),
    img: 'https://images.pickyourtrail.com/duration_option_3_ed7980d091.png?auto=format&fit=crop&w=256&q=75',
    days: '7-8 nights',
  },
  {
    id: uuidv4(),
    img: 'https://images.pickyourtrail.com/duration_option_4_d91110b9e1.png?auto=format&fit=crop&w=256&q=75',
    days: '8-10 nights',
  },
]
const persons = [
  {
    id: uuidv4(),
    count: 1,
    text: 'solo',
    image:
      'https://img.freepik.com/premium-vector/hiker-boy-looking-happy-isometric-concept-solo-backpacker-traveler-free-time-activities_135661-2397.jpg?ga=GA1.1.48591340.1727965003&semt=ais_authors_boost',
  },
  {
    id: uuidv4(),
    count: 2,
    text: 'couple',
    image:
      'https://img.freepik.com/free-vector/flat-couple-traveling_23-2148177857.jpg?t=st=1741874034~exp=1741877634~hmac=e372d86e1acf6e950730a953da8afea3f9d826f9110aed92cc79596fc0824e5b&w=1380',
  },
  {
    id: uuidv4(),
    count: 4,
    text: 'family',
    image:
      'https://img.freepik.com/premium-vector/real-life-family-moments-vector-illustration-concepts_1253202-59807.jpg?ga=GA1.1.48591340.1727965003&semt=ais_authors_boost',
  },
  {
    id: uuidv4(),
    count: 7,
    text: 'friends',
    image:
      'https://img.freepik.com/premium-vector/group-happy-friends-tourists-travelers-vector-illiustration_93208-1738.jpg?w=2000',
  },
]

const CustomPage = props => {
  const [duration, setDuration] = useState({id: null, days: null})
  const [personCount, setPersonCount] = useState([])
  const [cities, setCities] = useState([])
  const [activeTab, changeActiveTab] = useState('durationRecord')

  const {handle} = useParams()

  const renderDuraionSeciton = () => {
    const onChangeDuration = event => {
      setDuration({id: event.target.id, days: event.target.innerText})
      changeActiveTab('personsRecord')
    }

    return (
      <div>
        <h1>What's the duration of holiday?</h1>
        <ul className="flex flex-wrap justify-center items-center w-screen md:w-[80vw] my-5">
          {durations.map(duration => (
            <li
              key={duration.id}
              className="bg-transparent border-2 border-green-500 hover:border-amber-900 mx-5 p-3 px-0 rounded-xl w-4/12 md:w-2/12"
            >
              <div
                onClick={onChangeDuration}
                id={duration.id}
                className="w-full flex flex-col items-center bg-transparent"
              >
                <img
                  className="-z-1 rounded-full w-9/12"
                  src={duration.img}
                  alt="days"
                />
                <button className="my-5">{duration.days}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderPersonRecord = () => {
    const onChangePersonsRecord = (count, event) => {
      const st = `${count} persons`
      setPersonCount(prev => [...prev, st])
      changeActiveTab('citiesRecord')
    }

    const onChangeAdultCount = event => {
      const st = `${event.target.value} adults  `
      setPersonCount(prev => [...prev, st])
    }

    const onChangeChildrenCount = event => {
      const st = `${event.target.value} children`
      setPersonCount(prev => [...prev, st])
    }

    return (
      <div className='min-h-screen w-full'>
        <h1>Who's travelling with you?</h1>
        <ul className="flex flex-wrap items-center my-3  w-screen md:w-[80vw]">
          {persons.map(person => {
            if (person.text === 'family' || person.text === 'friends') {
              return (
                <div className="popup-container w-full md:w-3/12">
                  <Popup
                    modal
                    trigger={
                      <button
                        type="button"
                        className="trigger-button w-full border-2 border-transparent hover:border-amber-900"
                      >
                        <img
                          className="w-full md:min-h-42"
                          src={person.image}
                          alt="person"
                        />
                        <p>{person.text}</p>
                      </button>
                    }
                  >
                    {close => (
                      <>
                        <div>
                          <input
                          className='m-3 w-10/12'
                            onChange={onChangeAdultCount}
                            type="text"
                            placeholder="adults"
                          />
                          <input
                          className='m-3 w-10/12'
                            onChange={onChangeChildrenCount}
                            type="text"
                            placeholder="children"
                          />
                        </div>
                        <button
                          type="button"
                          className="trigger-button bg-linear-to-r from-emerald-100 to-amber-100"
                          onClick={() => {
                            close()
                            changeActiveTab('citiesRecord')
                          }}
                        >
                          Done
                        </button>
                      </>
                    )}
                  </Popup>
                </div>
              )
            } else {
              return (
                // <li key={person.id}>
                <button
                  key={person.id}
                  id={person.id}
                  onClick={event => onChangePersonsRecord(person.count, event)}
                  className="w-full md:w-3/12 border-2 border-transparent hover:border-amber-900"
                >
                  <img
                    className="md:min-h-42"
                    src={person.image}
                    alt="person"
                  />
                  <p>{person.text}</p>
                </button>
                // </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }

  const renderCitiesRecord = () => {
    const onAddCity = event => {
      if (cities.length < 4) {
        if (cities.includes(event.target.innerText)) {
          alert('loaction already added')
        } else {
          setCities(prevCities => [...prevCities, event.target.innerText])
        }
      } else {
        alert('too many locations are added')
      }
    }
    const sendAlert = () => {
      alert('congratulations')
    }
    return (
      <div className="flex flex-col items-center h-100">
        <h1 className="self-start">Choose Locations</h1>
        <div className="flex flex-col items-center md:flex-row h-full">
          <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-wrap justify-center my-3 w-[80%]">
              <li className="border-2 border-blue-300 m-3 hover:border-amber-900 rounded-md">
                <button onClick={onAddCity}>city 1</button>
              </li>
              <li className="border-2 border-blue-300 m-3 hover:border-amber-900 rounded-md">
                <button onClick={onAddCity}>city 2</button>
              </li>
              <li className="border-2 border-blue-300 m-3 hover:border-amber-900 rounded-md">
                <button onClick={onAddCity}>city 3</button>
              </li>
              <li className="border-2 border-blue-300 m-3 hover:border-amber-900 rounded-md">
                <button onClick={onAddCity}>city 4</button>
              </li>
              <li className="border-2 border-blue-300 m-3 hover:border-amber-900 rounded-md">
                <button onClick={onAddCity}>city 5</button>
              </li>
              <li className="border-2 border-blue-300 m-3 hover:border-amber-900 rounded-md">
                <button onClick={onAddCity}>city 6</button>
              </li>
            </ul>
            {cities.length > 0 && (
              <button
                className="text-black bg-linear-to-r from-emerald-100 to-amber-100"
                onClick={sendAlert}
                type="button"
              >
                Build Itinery
              </button>
            )}
          </div>
          <div className="h-full w-full md:w-5/12">
            <img
              className="h-full w-full rounded-full"
              src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?ga=GA1.1.48591340.1727965003&semt=ais_authors_boost"
              alt="travel"
            />
          </div>
        </div>
      </div>
    )
  }

  const renderSecion = () => {
    switch (activeTab) {
      case 'durationRecord':
        return renderDuraionSeciton()
      case 'personsRecord':
        return renderPersonRecord()
      case 'citiesRecord':
        return renderCitiesRecord()
      default:
        return
    }
  }

  const changeToPersonsSection = () => {
    changeActiveTab('personsRecord')
  }

  const changeToDurationSection = () => {
    changeActiveTab('durationRecord')
  }

  const changeToCitiesSection = () => {
    changeActiveTab('citiesRecord')
  }

  return (
    <div className="min-h-screen w-screen flex flex-col justify-start items-center p-3 md:p-5 bg-radial from-transparent from-40% to-green-200">
      <div className="flex flex-wrap items-center">
        <p>Now planning according to...</p>
        <span className="text-black border-1 border-black p-3 rounded-md m-3">
          <Link className='text-black' to='/customize'>{handle}</Link>
        </span>
        <span
          onClick={changeToDurationSection}
          className="cursor-pointer border-1 border-black p-3 rounded-md m-3"
        >
          {duration.days}
        </span>
        <span
          onClick={changeToPersonsSection}
          className="cursor-pointer border-1 border-black p-3 rounded-md m-3"
        >
          {...personCount}
        </span>
        <div
          onClick={changeToCitiesSection}
          className="cursor-pointer border-1 border-black p-3 rounded-md m-3"
        >
          {cities.map(city => (
            <span className="mx-2">{city}</span>
          ))}
        </div>
      </div>
      <hr className="w-screen my-3 p-3" />
      {renderSecion()}
    </div>
  )
}

export default CustomPage
