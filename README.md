# Nomads of Discovery

## Overview

**Nomads of Discovery** is a web application designed to provide users with access to various travel opportunities, including volunteer programs, scholarships, and grants. The application allows users to log in, manage their preferences, and filter results based on their interests, creating a personalized experience.

## Key Features

- **User Authentication**: Users can log in with a username, and their session persists using local storage. Users can also log out, which clears their session.
- **Light/Dark Mode**: Users can toggle between light and dark themes. The selected theme preference is saved in local storage, ensuring it persists across sessions.
- **Filtering Opportunities**: Users can filter opportunities based on categories such as volunteer programs, scholarships, and grants. The current filter setting is saved in local storage to maintain consistency across page reloads.
- **Interactive Features**: The application includes a star rating system for users to rate opportunities, sound effects for interactive elements, and a random quote generator to inspire users.

## Technologies Used

- HTML
- CSS
- JavaScript
- Font Awesome (for icons)

## Installation

1. Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/your-username/nomads-of-discovery.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nomads-of-discovery
   ```
3. Open `index.html` in your web browser to start using the application.

## Usage

1. **Login**: Enter a username in the login section and click the login button. This will welcome you and update the UI.
2. **Toggle Theme**: Click the theme toggle button to switch between light and dark modes. Your preference will be saved.
3. **Rate Opportunities**: Click on the stars under each opportunity to rate it. Your ratings are stored in local storage.
4. **Filter Opportunities**: Use the filter dropdown to select a category and click the search button to filter the displayed opportunities. The current filter setting will be saved for future visits.
5. **Random Quotes**: Click the button to display a random inspiring quote.

## User Preferences Management

User preferences such as the selected theme and current filter settings are stored in local storage. This allows users to have a consistent experience across sessions. When the user logs in, their username is stored in local storage, enabling a personalized greeting.

## Design and Typography

The application employs consistent typography using the Poppins font and a cohesive color scheme that adjusts based on user preferences. Responsive design principles are applied to ensure that the application looks good on all devices, from desktops to mobile phones.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Font Awesome](https://fontawesome.com/) for the icons used in this project.
- Inspired by the concept of creating a user-friendly interface for discovering travel opportunities.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Any improvements or suggestions are welcome!
