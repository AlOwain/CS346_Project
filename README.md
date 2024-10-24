# Hedge

## Overview

Hedge is a is a full-stack web application designed to provide users with a comprehensive platform for accessing historical data on sports events, submitting reviews, and viewing odds for upcoming games. Built with a MongoDB database, and an ExpressJS back-end, the application ensures that users can interact with the sports content through various dynamic features, the user can register an account, and sign in using their username and password, below are some key features:

## System Functional Requirements

1. User Authentication (Login and Registration)
    - Account Registration: Users can create an account by providing basic details such as username and password. Once registered, their credentials are stored in our database, and in their browsers' local storage, allowing them to remain logged in on the same browser/device.
    - Login Functionality: Users who have an existing account can log in using their credentials. This triggers a check against the stored data to ensure a match before granting access to the main features of the platform.
    - Persistent Sessions: Through the use of local storage, user sessions are maintained, allowing users to stay logged in across different visits unless they manually log out. This makes the platform more convenient by eliminating the need to log in on every visit.
2. Sports Timeline
    - The timeline feature offers a chronological representation of various sports events, whether they are past or upcoming. The timeline provides detailed information on individual games or competitions, including teams, scores, and other relevant statistics.
    - Users can scroll through the timeline to view event histories and navigate through the timeline of a specific sport or league (e.g., soccer, basketball, or tennis). This feature creates an engaging and informative overview of sports events over time ([see](showcase/timeline.png)).
3. Sports Reviews
    Logged-in users can submit reviews for the sports events displayed on the platform. Reviews may consist of user opinions on the game's quality, team performance, standout players, or overall experience. Reviews can include text and possibly a rating system (e.g., star ratings) to allow users to express their thoughts quantitatively. Users can also view reviews left by others, providing a community-driven experience where fans can engage in discussions about their favorite sports, teams, or specific matches.
4. Odds Insights
    - Another core feature of the platform is displaying odds for upcoming sports events. These odds give users insight into which teams or players are favored to win and the potential payouts for different betting scenarios.
    - Users can access odds for various sports, compare them, and even filter odds based on criteria such as league, date, or team.
5. Account Management
    - Once registered and logged in, users can manage their profiles. Basic profile management includes:
        - Viewing and editing personal details like username and password.
        - Viewing their past reviews and contributions to the site.
    - The local storage mechanism ensures that personal data is readily available on the client-side, streamlining the process of retrieving account information while maintaining performance and security.

## System Design

### Database Design (MongoDB)

MongoDB serves as the main database for this project, offering flexible, document-based data storage. Key collections include:

- Users Collection: Stores user details such as username, password, and other profile information.
- Events Collection (Cards): Holds data about the sports events (e.g., match date, teams, scores, and stats).
- Reviews Collection: Contains user-submitted reviews, including the event ID, the user’s ID, review text, and ratings.
- Participants Collection: Contains all data relevant to the teams or individuals participating in any sport.

The database's NoSQL structure allows for fast retrieval and updates, especially since sports data and user reviews are often dynamic and updated frequently.

### Back End (ExpressJS)

The ExpressJS framework is utilized to manage the backend server, handling routing, user requests, and interactions with the MongoDB database. It provides RESTful APIs for:
- User registration and login.
- CRUD (Create, Read, Update, Delete) operations on sports events, reviews, and odds.
- Querying sports data, reviews, and odds based on user selections or search queries.
- Managing user data stored in MongoDB, handling encryption for passwords, and ensuring secure account access.
- The backend also implements validation and error handling to ensure smooth and secure user interactions. For example, login attempts with incorrect credentials return clear error messages.

### Front End

The front-end of the application uses modern web technologies such as HyperText Markup Language (HTML), Cascading Style Sheets (CSS), and JavaScript (JS), making the interface dynamic and responsive.

Users are greeted with the match timeline, where they can easily navigate through the different upcoming and past matches, reviewing games, or checking the latest odds. The sports timeline is a key aspect of the front end, it includes a visual scrollable timeline that dynamically loads events from the database.

The interface prioritizes usability and provides an intuitive experience for both sports fans and users interested in odds or betting data.

## Use Cases

**Sports Fans** Users can track the history of their favorite teams and sports by browsing the timeline, leaving reviews, and viewing the odds for upcoming games.
**General Users** Casual users can benefit from reading reviews, checking sports event timelines, and understanding odds, making the platform an informative space for any sports enthusiast.

## Technologies Used

Front End: HTML5, CSS3, JavaScript.
Backend: Node.JS, ExpressJS for RESTful API development.
Database: MongoDB, handling all user, event, review, and odds data.
