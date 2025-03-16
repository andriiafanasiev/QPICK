# QPICK - iPhone Accessories Store

QPICK is a React-based online store offering a wide range of iPhone accessories such as cases, screen protectors, chargers, and more. The app utilizes React Router for seamless page navigation without reloading, enhancing the user experience.

## Live Demo

You can check out the live demo of the app [here](https://qpick-lac.vercel.app).

<img width="1440" alt="screenshot" src="https://github.com/user-attachments/assets/48d23231-d166-445e-9fbc-0e9f99a50676" />

## Technologies Used

![React](https://img.icons8.com/color/48/000000/react-native.png)  
![Tailwind CSS](https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png&color=000000)

- [Framer Motion](https://framermotion.framer.website/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Leaflet.js](https://leafletjs.com/)

## Features

- **React-based**: Built using React to ensure a dynamic and responsive UI.
- **Product Catalog**: Displays various iPhone accessories.
- **Seamless Navigation**: Utilizes React Router for efficient page navigation.
- **Animated Transitions**: Implemented using **[Framer Motion](https://framermotion.framer.website/)** for smooth page transitions.
- **Styled with Tailwind CSS**: The UI is styled using Tailwind CSS for a modern and clean design.
- **Interactive Map for Delivery**: Uses **[OpenStreetMap](https://www.openstreetmap.org/)** and **[Leaflet.js](https://leafletjs.com/)** to show the user's location and display delivery information dynamically.

## Map & Geolocation

QPICK integrates an interactive map using **OpenStreetMap** and **Leaflet.js**:

- **Geolocation Support**: Automatically detects the user's location using the browser's Geolocation API.
- **Default Location**: If geolocation is not granted, the map centers on **Kyiv, Ukraine**.
- **Smooth View Transition**: The map updates dynamically when the user's location is detected.
- **No API Keys Required**: OpenStreetMap and Leaflet.js are free and open-source, requiring no API keys.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/andriiafanasiev/QPICK.git
   ```
2. Navigate to the project directory:
   ```bash
   cd QPICK
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:

   ```bash
   npm start

   ```
