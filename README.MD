# Day-11 Practical

A mobile application for the University of Vavuniya, providing features like viewing university information, contact us page, and navigation to various sections.


## Features

- **Contact Us**: A form for users to submit inquiries, including fields for Name, Email, Phone Number, and Message.
- **About Us**: Displays the university's history and other relevant information about the institution.
- **Navigation**: Smooth and intuitive navigation using stack-based routing between screens.
- **Responsive Design**: Fully optimized for both mobile and web platforms for a seamless experience.


## Dependencies

- **React Native**: For building native mobile applications.
- **React Navigation**: For implementing navigation between screens.
- **React Native Paper**: For UI components (buttons, text inputs, etc.).
- **Expo**: For running and building the project with ease.
- **React Native Safe Area Context**: To ensure content is rendered within safe areas (e.g., not covered by notches or status bars).
- **React Native Web**: For enabling web compatibility.
- **React DOM**: For rendering the app on the web.
- **@expo/metro-runtime**: To optimize bundling during development.

## Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A device or simulator/emulator to run the app

### Steps to Install

1. Clone this repository:
   ```bash
     git clone https://github.com/your-username/myapp.git
     cd myapp
   ```
2. Install dependencies:
   ```bash
     npx expo install react-dom react-native-web
     npx expo install @expo/metro-runtime
   ```
3. Install additional dependencies for your project:
  ```bash
    npm install @react-navigation/native @react-navigation/native-stack react-native-paper   react-native-safe-area-context
  ```
4. Run the app:
  ```bash
    npx expo start
  ```
---
## Directory Structure
  ```bash
    myapp/
├── assets/                # Contains static assets like images
├── components/            # Reusable components
├── screens/               # Screens like AboutUs, ContactUs, etc.
├── App.js                 # Main app entry point
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
  ```
---
## Usage
1. The app is built using React Navigation, where screens like **About Us** and **Contact Us** can be navigated through buttons.
2. In the **Contact Us** screen, users can fill out a form to send inquiries.
3. The **About Us** screen shows the university’s history, with an image and textual content.

