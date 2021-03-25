import React, { useEffect, useState } from 'react';
import Dropdown from '../dropdown/dropdown';

function ReactDropdown(props) {
  const { dropdownTitlePlural, dropdownTitle, dropdownListData, mode } = props;
  const [dropdownList, setDropdownList] = useState([]);

  useEffect(() => {
    setDropdownList(dropdownListData);
  }, [dropdownListData]);

  const resetThenSetDropdown = (listItemId) => {
    const _dropdownList = [...dropdownList];

    _dropdownList.forEach(_item => _item.selected = false);
    _dropdownList[listItemId].selected = true;
    setDropdownList(_dropdownList);
  }

  const toggleDropdownListItem = (listItemId) => {
    const _dropdownList = [...dropdownList];
    _dropdownList[listItemId].selected = !_dropdownList[listItemId].selected;
    setDropdownList(_dropdownList);
  }

  return (
    <Dropdown
      dropdownTitlePlural={dropdownTitlePlural}
      dropdownTitle={dropdownTitle}
      dropdownList={dropdownList}
      resetThenSetDropdown={resetThenSetDropdown}
      toggleDropdownListItem={toggleDropdownListItem}
      mode={mode}
    />
  );
}


export default ReactDropdown;