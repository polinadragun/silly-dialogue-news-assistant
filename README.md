**A small (and still poorly functioning))))) interactive news assistant** that helps users fetch the latest news based on their interests. While it's a work in progress, the core functionality includes recognizing user intents, fetching relevant news, and managing simple dialogue interactions.

## Features
- **Intent Recognition:** Uses regular expressions (via `XRegExp`) to identify user intents such as greetings, news requests by category or date, and conversation flow commands.
- **News Fetching:** Integrates with the [NewsAPI](https://newsapi.org/) to retrieve top headlines based on categories and date ranges.
- **Dialogue Management:** Implements a basic finite state machine (FSM) to handle different conversation states.

## What's Used
- **Node.js:** The runtime environment for the project
- **XRegExp:** For regular expression handling.
- **Axios:** For making HTTP requests to the NewsAPI.
- **Dotenv:** To manage environment variables securely.
