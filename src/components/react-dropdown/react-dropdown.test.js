import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDropdown from './react-dropdown';
import Dropdown from '../dropdown/dropdown';

afterEach(cleanup);

describe('ReactDropdown', () => {
  test('should render ReactDropdown Component', () => {
    const ReactDropdownComponent = render(<ReactDropdown />);
    expect(ReactDropdownComponent).toBeTruthy();
  });

  test('should render Dropdown Component', () => {
    const DropdownComponent = render(<Dropdown />);
    expect(DropdownComponent).toBeTruthy();
  });
})