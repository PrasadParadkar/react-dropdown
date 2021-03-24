import { render, cleanup } from '@testing-library/react';
import App from './App';
import ReactDropdown from './components/react-dropdown/react-dropdown';

afterEach(cleanup);

describe('App', () => {
  test('should render App Component', () => {
    const AppComponent = render(<App />);
    expect(AppComponent).toBeTruthy();
  });

  test('should render ReactDropdown Component', () => {
    const ReactDropdownComponent = render(<ReactDropdown />);
    expect(ReactDropdownComponent).toBeTruthy();
  });
})
