
## Components

### 1. `SearchBar.js`
A component that handles text input for searching lyrics or songs. It takes in a search query and triggers the search process.

### 2. `LyricsResult.js`
A component that displays search results from the Genius API, including the song title, artist, and a link to view the lyrics on the Genius website.

### 3. `VoiceInput.js`
A component that allows users to use voice input for searching lyrics. The voice input is transcribed and used to search for songs.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/dracangelo/shazmam
    ```

2. Navigate into the project directory:
    ```bash
    cd shazmam
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up your environment variables:

    Create a `.env` file in the root directory and add your Genius API access token:

    ```
    REACT_APP_GENIUS_ACCESS_TOKEN=your_access_token_here
    ```

5. Run the application:
    ```bash
    npm start
    ```

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **axios**: Promise-based HTTP client for making requests to the Genius API.
- **react-speech-recognition** (optional): For handling voice recognition.

## How It Works

- Users can search for lyrics either by typing a query in the search bar or using voice input.
- The app sends the query to the Genius API, retrieves search results, and displays the relevant information.
- Each result provides a link to view the full lyrics on the Genius website.

## Features

- Voice and text input support.
- Loading states and error handling.
- Responsive and user-friendly UI.

## Future Enhancements

- Add pagination for search results.
- Integrate additional music data sources.
- Improve voice recognition accuracy.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
