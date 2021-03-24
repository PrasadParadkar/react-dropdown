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

  toggleDropdownList = () => {
    this.setState(prevState => ({ isListOpen: !prevState.isListOpen }));
  }

  selectDropdownListItem = (listItem) => {
    const { resetThenSetDropdown } = this.props;
    const { title, id, key } = listItem;

    this.setState({
      dropdownTitle: title,
      isListOpen: false
    }, () => resetThenSetDropdown(id, key));
  }

  render() {
    const { isListOpen, dropdownTitle } = this.state;
    const { dropdownList } = this.props;

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
                    onClick={() => this.selectDropdownListItem(item)}
                  >
                    {`${item.title} `}
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