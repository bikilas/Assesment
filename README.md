# Assesment
# URL-Shortening

## Overview
This project is a simple URL shortener built using React and React Router. It allows users to shorten URLs using the TinyURL API, with authentication features including login and sign-up using local storage.

## Features
- URL shortening using TinyURL API
- User authentication with local storage
- React Router for navigation
- Form validation using the `validator` package

## Technologies Used
- React
- React Router
- JavaScript (ES6+)
- Local Storage for user authentication
- TinyURL API for URL shortening
- CSS for styling

## Installation
### Prerequisites
- Node.js and npm installed on your machine

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/bikilas/Assesment.git
  cd Assesment
  code .

   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser.



## Usage
1. Visit the homepage and enter a URL to shorten it.
2. If not logged in, you will be redirected to the login page.
3. Sign up and log in to access the URL shortener.
4. Once authenticated, you can shorten URLs and get shortened links.

## Authentication Details
- Users can sign up and log in using email and password.
- Authentication is managed using local storage.
- If an unauthenticated user tries to access the home page, they will be redirected to the login page.



