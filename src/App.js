import React from 'react'
import './App.css';
import ReactDropdown from './components/react-dropdown/react-dropdown';
import { locations } from './common/locationData';

function App() {
  const locationData = locations;

  return (
    <div className="App">
      <h3>react-dropdown</h3>
      <p>Set mode to single for single select dropdown and multi for multi-select dropdown</p>
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
