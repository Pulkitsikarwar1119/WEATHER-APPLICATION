# WEATHER APPLICATION

COMPANY : CODTECH IT SOLUTIONS

NAME  : PULKIT SIKARWAR

INTERN ID  :CT08DF482

DOMAIN  : MERN STACK WEB DEVELOPMENT

DURATION :8 WEEKS

MENTOR : NEELA SANTOSH

## DESCRIPTION OF TASK

Objective:
The goal of this task was to build a modern, responsive Weather Application using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with integration of the OpenWeatherMap API to fetch real-time weather data based on city input.

🛠️ Tech Stack

React.js – Frontend framework for building the user interface.

Node.js – Backend runtime environment.

Express.js – Web server to handle API requests.

MongoDB – (Optional) to store search history or user preferences.

OpenWeatherMap API – External API used to fetch current weather details based on city name.

⚙️ Functional Overview

The application allows users to:

Enter the name of a city.

Fetch and display real-time weather information such as:

Temperature

Weather condition (sunny, cloudy, rain, etc.)

Humidity

Wind speed

Icon representing current weather

Get user-friendly error messages if the city is not found or API fails.

See results displayed in a modern, clean UI.

📁 Project Structure

php
Copy
Edit
Task-2-Weather-App/
├── backend/
│   └── server.js           # Express server to handle API calls
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── WeatherCard.jsx # Component for showing weather details
│   │   ├── App.css         # UI styling with optional background
│   └── public/
│       └── index.html
🔌 API Integration
To fetch weather data, the application uses:

bash

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
The API key is generated from the OpenWeatherMap dashboard (Free tier). Axios or fetch API is used on the frontend to make the request and update the UI dynamically based on the response.

🖥️ How It Works

User Input: A text box allows users to input a city name.

API Call: On form submission or button click, an API request is sent to OpenWeatherMap using the city input.

Display Results: Once data is received, a card-like interface displays the weather, including icons and temperature.

Error Handling: If the city name is invalid or the API fails, appropriate messages are shown.

🎨 UI Features

Responsive layout using custom CSS (or optionally Tailwind/Bootstrap)

Background images and colors to reflect weather mood

Weather displayed in card format with clear typography

Weather icons fetched dynamically based on condition codes

✅ Execution

Start the frontend:

bash

cd frontend
npm install
npm start
(Optional) Start backend if using Express as a proxy:

bash

cd backend
node server.js

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## OUTPUT

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/6644fdf2-406c-4520-8e0b-4357214f8b9f" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/0825151e-301f-4add-9868-c5999febc70e" />

