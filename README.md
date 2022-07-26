# Exercise 2 by Ponch Castor
Version: 1.0.0
[Exercise 1](https://github.com/cascastor6/mindarc-exercise-1)

## Features
- unlimited automatically generated elements based on data in data.js
- mobile and web UI
- responsive UI


## Initialization and Running the App
Download the repository from github, and then clone it into your machine with 'git clone <link-to-repository>'
Change your terminal's directory to mindarc-exercise-2 (can be done using 'cd mindarc-exercise-2' in the console)
Run 'npm install' to download the dependencies of the program
Open up the directory in your terminal and type 'npm run start', then proceed to enter localhost:3000 into your browser's address bar to open the program

## Architecture
There are three core parts to this program: the component folder, the App.js file and the data.json file.
1. Component folder
    - This folder contains the web and mobile version of the app, as well as the css for the mobile
2. public/data.json
    - This file contains the raw data. See how to add or edit data below.
3. App.js
    - this is the entry point of the app, as well as the file that contains the translation of the data from JSON to processable data.

## How to Use 
### Responsive Design
Using 'react-responsive' package, you can determine whether the viewport is mobile or desktop by pasting the following import at the top of your file
```import { useMediaQuery } from "react-responsive";```
Afterwards, paste this boolean into your function body and use it accordingly. 
```
const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
```

### Adding data / Editing data
To add more tabs/accordions, simply add a JSON object to the array in data.json. The program will translate it into additional elements for the UI automatically. You can also edit existing entries and it will be reflected.