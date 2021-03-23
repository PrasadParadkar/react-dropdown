import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListOpen: false,
      dropdownTitle: this.props.dropdownTitle
    };
  }

  render() {
    const { isListOpen, dropdownTitle } = this.state;
    const { dropdownList } = this.props;

    return (
      <div className="dd-wrapper">
        <button
          type="button"
          className="dd-header"
          onClick={ }
        >
          <div className="dd-header-title">{dropdownTitle}</div>
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
                    onClick={ }
                  >
                    {item.title}
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