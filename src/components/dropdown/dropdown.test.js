import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Dropdown from './dropdown';

const LocationData = [
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
];

afterEach(cleanup);

describe('Dropdown', () => {
  test('should render Dropdown Component', () => {
    const DropdownComponent = render(<Dropdown />);
    expect(DropdownComponent).toBeTruthy();
  });

  test('should display dropdown header title', () => {
    const { getByText } = render(<Dropdown dropdownTitle="Select Location" dropdownTitlePlural="Locations" mode="single" dropdownList={[]} />);
    expect(getByText(/select location/i)).toBeInTheDocument();
  });

  test('should toggle the dropdown list', () => {
    const { container } = render(<Dropdown dropdownTitle="Select Location" dropdownTitlePlural="Locations" mode="single" dropdownList={LocationData} />);
    fireEvent.click(container.querySelector('.dd-header'));
    expect(container.querySelector('.dd-list')).toBeVisible();
  });

  test('should call toggleDropdownListItem method on dropdown list item selection for multi mode', () => {
    const mockToggleDropdownListItem = jest.fn();
    const { container } = render(<Dropdown dropdownTitle="Select Location" dropdownTitlePlural="Locations" mode="multi" dropdownList={LocationData} toggleDropdownListItem={mockToggleDropdownListItem} />);
    fireEvent.click(container.querySelector('.dd-header'));
    fireEvent.click(container.querySelectorAll('.dd-list-item')[0]);
    expect(mockToggleDropdownListItem).toHaveBeenCalled();
  });

  test('should call toggleDropdownListItem method on dropdown list item selection for single mode', () => {
    const mockResetThenSetDropdown = jest.fn();
    const { container } = render(<Dropdown dropdownTitle="Select Location" dropdownTitlePlural="Locations" mode="single" dropdownList={LocationData} resetThenSetDropdown={mockResetThenSetDropdown} />);
    fireEvent.click(container.querySelector('.dd-header'));
    fireEvent.click(container.querySelectorAll('.dd-list-item')[0]);
    expect(mockResetThenSetDropdown).toHaveBeenCalled();
  });
});

