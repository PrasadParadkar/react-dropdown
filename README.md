# react-dropdown

react-dropdown is React component which provides HTML5 dropdown that can be used either as a single select or multi-select.

## Installation

Use the git clone command to download the project. Go to the project directory and install the required dependencies.

```bash
$ git clone https://github.com/PrasadParadkar/react-dropdown.git
$ cd react-dropdown
$ npm install
$ npm start
```

## Usage

```react
Single Select Dropdown :

<ReactDropdown
  dropdownTitle="Select Location"
  dropdownTitlePlural="Locations"
  dropdownListData={locationData}
  mode="single"
/>

Multi-Select Dropdown

<ReactDropdown
  dropdownTitle="Select Location"
  dropdownTitlePlural="Locations"
  dropdownListData={locationData}
  mode="multi"
/>

```

## Configuration

| Property            | Datatype         | Description                                                                   | Example                                       |
| ------------------- | ---------------- | ----------------------------------------------------------------------------- | --------------------------------------------- |
| dropdownTitle       | string           | Title for dropdown                                                            | 'Select Location'                             |
| dropdownTitlePlural | string           | Title to display when multiple elements are selected in multi-select dropdown | 'Locations'                                   |
| dropdownListData    | Array of Objects | Datalist for dropdown options                                                 | [ {id: 0, title: 'New York, selected: false}] |
| mode                | string           | 'select' for Single Select Dropdown, 'multi' for Multi-Select Dropdown        | 'single' OR 'multi'                           |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## License

[Prasad Paradkar](https://github.com/PrasadParadkar)
