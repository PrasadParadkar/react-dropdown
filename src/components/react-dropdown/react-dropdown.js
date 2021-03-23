import React from 'react';
import Dropdown from '../dropdown/dropdown';

const ReactDropdown = (props) => {
  const { dropdownTitle, dropdownList } = props;

  return (
    <Dropdown
      dropdownTitle={dropdownTitle}
      dropdownList={dropdownList}
    />
  );
}


export default ReactDropdown;