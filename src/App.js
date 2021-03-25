import React, { useState, useEffect } from 'react'
import './App.css';
import ReactDropdown from './components/react-dropdown/react-dropdown';

const App = () => {
  const [dropdownData, setDropdownData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const _dropdownData = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => data);
      setDropdownData(_dropdownData);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h3>react-dropdown</h3>
      <p>Set mode to single for single select dropdown and multi for multi-select dropdown</p>
      <ReactDropdown
        dropdownTitle="Select User"
        dropdownTitlePlural="Users"
        dropdownListData={dropdownData}
        mode="single"
        listItemTitleKey="name"
      />
    </div>
  );
}

export default App;
