import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './dropdown.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isListOpen: false,
      dropdownTitle: this.props.dropdownTitle
    };

  }

  static getDerivedStateFromProps(nextProps) {
    const { dropdownList, dropdownTitle, dropdownTitlePlural, mode } = nextProps;

    if (mode === 'single') {
      const selectedListItem = dropdownList.filter((item) => item.selected);

      if (selectedListItem.length) {
        return {
          dropdownTitle: selectedListItem[0].title,
        };
      }
      return { dropdownTitle };
    } else if (mode === 'multi') {
      const filteredListItems = dropdownList.filter((item) => item.selected);

      if (filteredListItems.length === 0) {
        return { dropdownTitle };
      }
      if (filteredListItems.length === 1) {
        return { dropdownTitle: filteredListItems[0].title };
      }
      if (filteredListItems.length === dropdownList.length) {
        return { dropdownTitle: `All ${dropdownTitlePlural}` };
      } else if (filteredListItems.length > 1) {
        return { dropdownTitle: `${filteredListItems.length} ${dropdownTitlePlural}` };
      }
    } else { return null; }
  }

  toggleDropdownList = () => {
    this.setState(prevState => ({ isListOpen: !prevState.isListOpen }));
  }

  selectDropdownListItem = (listItem) => {
    const { resetThenSetDropdown } = this.props;
    const { title, id } = listItem;

    this.setState({
      dropdownTitle: title,
      isListOpen: false
    }, () => resetThenSetDropdown(id));
  }

  render() {
    const { isListOpen, dropdownTitle } = this.state;
    const { dropdownList, toggleDropdownListItem, mode } = this.props;

    return (
      <div className="dd-wrapper">
        <button
          type="button"
          className="dd-header"
          onClick={this.toggleDropdownList}
        >
          <div className="dd-header-title">{dropdownTitle}</div>
          {
            isListOpen
              ? <FontAwesome name="angle-up" size="2x" className="dd-header-icon" />
              : <FontAwesome name="angle-down" size="2x" className="dd-header-icon" />
          }
        </button>
        {
          isListOpen &&
          (
            <div
              role="list"
              className="dd-list"
            >
              {
                dropdownList.map(item => (
                  <button
                    type="button"
                    className="dd-list-item"
                    key={item.id}
                    onClick={() => mode === 'single' ? this.selectDropdownListItem(item) : toggleDropdownListItem(item.id)}
                  >
                    {`${item.title}`}
                    {item.selected && <FontAwesome name="check" className="dd-list-item__checked" />}
                  </button>
                ))
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default Dropdown;