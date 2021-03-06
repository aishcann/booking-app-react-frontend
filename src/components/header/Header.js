import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Header() {

    const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    }
])

  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className='headerList'>
                <div className='headerListItem active'>
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car rentals</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Attractions</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className='headerTitle'>
                A lifetime of discounts? It's Genius.
            </h1>
            <p className='headerDescription'>
                Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account
            </p>
            <button className='headerButton'>
                Sign In / Register 
            </button>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input 
                        type='text'
                        placeholder='Where are you going?'
                        className='headerSearchInput'    
                    />
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText">
                        date to date
                    </span>
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span> 
                        2 adults 2 children 1 room
                    </span>
                    <DateRange 
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                    />
                </div>
                <div className='headerSearchItem'>
                    <button className='headerButton'>
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header