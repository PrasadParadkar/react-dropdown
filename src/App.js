import React, { useState } from 'react'
import './App.css';
import Dropdown from './components/dropdown/dropdown';
import ReactDropdown from './components/react-dropdown/react-dropdown';
// import { locationData } from './common/locationData';

const App = () => {
  const [locationData, setLocationData] = useState(
    [
      {
        id: 0,
        title: 'New York',
        selected: false,
        key: 'location'
      },
      {
        id: 1,
        title: 'Dublin',
        selected: false,
        key: 'location'
      },
      {
        id: 2,
        title: 'California',
        selected: false,
        key: 'location'
      },
      {
        id: 3,
        title: 'Istanbul',
        selected: false,
        key: 'location'
      },
      {
        id: 4,
        title: 'Izmir',
        selected: false,
        key: 'location'
      },
      {
        id: 5,
        title: 'Oslo',
        selected: false,
        key: 'location'
      }
    ]
  );

  return (
    <div className="App">
      <ReactDropdown
        dropdownTitle="Select Location"
        dropdownTitlePlural="Locations"
        dropdownListData={locationData}
        mode="multi"
      />
    </div>
  );
}

export default App;
