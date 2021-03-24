import React, { useEffect, useState } from 'react';
import Dropdown from '../dropdown/dropdown';

const ReactDropdown = (props) => {
  const { dropdownTitle, dropdownListData } = props;
  const [dropdownList, setDropdownList] = useState([]);

  useEffect(() => {
    setDropdownList(dropdownListData);
  }, [dropdownListData]);

  const resetThenSetDropdown = (listItemId, listItemKey) => {
    const _dropdownList = [...dropdownList];

    _dropdownList.forEach(_item => _item.selected = false);
    _dropdownList[listItemId].selected = true;
    setDropdownList(_dropdownList);
  }

  return (
    <Dropdown
      dropdownTitle={dropdownTitle}
      dropdownList={dropdownList}
      resetThenSetDropdown={resetThenSetDropdown}
    />
  );
}


export default ReactDropdown;