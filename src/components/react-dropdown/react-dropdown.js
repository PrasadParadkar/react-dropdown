import React, { useEffect, useState } from 'react';
import Dropdown from '../dropdown/dropdown';

const ReactDropdown = (props) => {
  const { dropdownTitlePlural, dropdownTitle, dropdownListData, mode, listItemTitleKey } = props;
  const [dropdownList, setDropdownList] = useState([]);

  useEffect(() => {
    setDropdownList(dropdownListData);
  }, [dropdownListData]);

  const resetThenSetDropdown = (listItemId) => {
    const _dropdownList = [...dropdownList];

    _dropdownList.forEach(_item => {
      if (_item.id === listItemId) {
        _item.selected = true;
      } else {
        _item.selected = false;
      }
    });
    setDropdownList(_dropdownList);
  }

  const toggleDropdownListItem = (listItemId) => {
    const _dropdownList = [...dropdownList];
    _dropdownList.forEach(_item => {
      if (_item.id === listItemId) _item.selected = !_item.selected;
    })
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
      listItemTitleKey={listItemTitleKey}
    />
  );
}


export default ReactDropdown;