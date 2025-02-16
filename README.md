# Ride Sharing App

## Overview

This is a ride-sharing application built with React Native and Expo. The app allows users to find rides, choose drivers, and manage their ride history. It integrates with Google Places API for location services and Clerk for authentication.

## Features

- User authentication (sign up, sign in)
- Search for rides using Google Places
- View available drivers and their details
- Book rides and manage ride history
- Responsive design with Tailwind CSS

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For rapid development and deployment.
- **Zustand**: For state management.
- **Clerk**: For user authentication.
- **Google Places API**: For location services.
- **Tailwind CSS**: For styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ride-sharing-app.git
   cd ride-sharing-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add your API keys:
     ```
     EXPO_PUBLIC_GOOGLE_API_KEY=your_google_api_key
     EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     EXPO_PUBLIC_GEOAPIFY=your_geoapify_key
     DATABASE_URL=your_database_url
     ```

4. Start the development server:
   ```bash
   npx expo start
   ```

## Usage

- **Sign Up / Sign In**: Users can create an account or log in using their email and password.
- **Find a Ride**: Users can search for rides by entering their destination.
- **Choose a Driver**: Users can view available drivers and select one for their ride.
- **Book a Ride**: Users can confirm their ride and view ride details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for the libraries and tools that made this project possible.
