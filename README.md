# Country Search Bar

This project is a React-based web application that features a search bar allowing users to search for countries by their name or capital. The search bar also includes an autocomplete functionality, displaying suggestions as users type. The country data is sourced from a local JSON file.

## 🚀 Features

- **Country Search:** Search for countries by their name or capital.
- **Autocomplete:** Suggestions are shown dynamically based on the user's input.
- **Local JSON Data:** The country data is fetched from a local JSON file.
- **Responsive UI:** The application is designed to be visually appealing and responsive on all devices.

## 🛠️ Technologies Used

- **React:** Frontend framework for building UI components.
- **CSS:** Styling for the UI.
- **JSON:** Country data is stored locally in a JSON file.

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Thirupy/Fast-Finder.git
Navigate to the project directory:

bash
Copy code
cd Fast-Finder
Install dependencies:

Ensure you have Node.js installed, then run:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

📁 Project Structure
.
├── public
│   ├── data
│   │   └── countries.json      # Local country data
│   ├── index.html              # Main HTML file
│   ├── search-icon.png         # Search icon for the UI
├── src
│   ├── App.js                  # Main React component
│   ├── index.js                # Entry point of the app
│   ├── styles.css              # Global styles
│   ├── components              # React components
│   │   ├── FastFinder.js       # Search functionality
│   │   ├── FastFinder.css      # Search bar styles
│   │   ├── ResultsPage.js      # Component displaying search results
│   │   └── ResultsPage.css     # Styles for results page
├── README.md                   # This file
├── package.json                # Project metadata and dependencies
└── package-lock.json           # Dependency tree lock file

📋 Example of countries.json file structure:
[
  {
    "country": "United States",
    "capital": "Washington, D.C.",
    "population": 331002651,
    "official_language": "English",
    "currency": "United States Dollar"
  },
  {
    "country": "Canada",
    "capital": "Ottawa",
    "population": 37742154,
    "official_language": ["English", "French"],
    "currency": "Canadian Dollar"
  },
  {
    "country": "Brazil",
    "capital": "Brasília",
    "population": 212559417,
    "official_language": "Portuguese",
    "currency": "Brazilian Real"
  }
]
🎯 Usage
Enter the name of a country or its capital in the search bar.
As you type, suggestions will appear based on your input.
Select a suggestion or press Enter to see the country details.
⚙️ Implementation Details
Search Functionality: The FastFinder.js component reads data from the countries.json file located in the public/data folder.
Autocomplete: While typing in the search bar, suggestions dynamically appear based on partial matches with country names or capitals.
Local Data Fetching: The project reads country data from a local JSON file instead of fetching it from an external API.
🌍 Deployment
The app is deployed on Netlify and can be accessed via the following link:

Country Search Bar - Live Demo
To deploy the application:
Build the app for production:

bash
Copy code
npm run build
Deploy using your preferred method: You can deploy the app to platforms like Vercel, Netlify, or GitHub Pages.

📜 License
This project is open-source and available under the MIT License.


This README format should display properly on GitHub and help explain the functionality and usage of the project clearly. The directory structure and code examples will be displayed in a clean, organized way.
