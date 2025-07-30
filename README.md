# WanderLust

# Wanderlust

## Description

Wanderlust is a web application for listing and discovering travel destinations. Users can browse listings, create new listings, leave reviews, and manage their accounts.

## Features

- **Listings:** Browse available listings with details like title, description, price, location, and user reviews.
- **User Authentication:** Secure user registration, login, and logout functionality.
- **Reviews:** Users can leave reviews and ratings for listings.
- **Image Upload:** Listing owners can upload images for their listings.
- **Map Integration:** Integrated with Mapbox for displaying listing locations.
- **Responsive Design:** Provides a seamless experience across various devices.
- **Filtering and Sorting:** Implemented filtering and sorting options for listings.

## Technologies Used

- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js.
- **Mongoose:** MongoDB object modeling tool.
- **MongoDB:** NoSQL database.
- **EJS:** Templating engine.
- **Passport.js:** Authentication middleware.
- **Mapbox:** Mapping platform.
- **Cloudinary:** Cloud-based image management service.
- **Multer:** Middleware for handling `multipart/form-data`.
- **Bootstrap:** CSS framework.

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    - Create a `.env` file in the root directory.
    - Add the following environment variables:

      ```
      NODE_ENV=development
      ATLASDB_URL=<Your MongoDB Atlas connection string>
      SECRET=<Your secret key for session management>
      CLOUD_NAME=<Your Cloudinary cloud name>
      CLOUD_API_KEY=<Your Cloudinary API key>
      CLOUD_API_SECRET=<Your Cloudinary API secret>
      MAP_TOKEN=<Your Mapbox access token>
      ```

4.  **Run the application:**

    ```bash
    npm start
    ```

    or

    ```bash
    node app.js
    ```

5.  **Access the application:**

    Open your browser and go to `http://localhost:8080`.

## Database Initialization

To initialize the database with sample data, run the `init/index.js` script:

```bash
node init/index.js

# Note: Ensure your MongoDB server is running before initializing the database.

# Project Structure
.
├── .env                # Environment variables
├── .gitignore          # Specifies intentionally untracked files that Git should ignore
├── app.js              # Main application file
├── cloudConfig.js      # Cloudinary configuration
├── middleware.js       # Custom middleware functions
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
├── schema.js           # Joi schema for data validation
├── controllers/        # Route handlers
│   ├── listing.js      # Listing route handlers
│   ├── review.js       # Review route handlers
│   └── user.js         # User route handlers
├── init/               # Initialization scripts
│   ├── data.js         # Sample data for database initialization
│   └── index.js        # Database initialization script
├── models/             # Mongoose models
│   ├── listing.js      # Listing model
│   ├── review.js       # Review model
│   └── user.js         # User model
├── public/             # Static assets
│   ├── css/            # CSS files
│   │   ├── rating.css  # Rating styles
│   │   └── style.css   # Main styles
│   └── js/             # JavaScript files
│       ├── map.js      # Mapbox integration script
│       └── script.js   # Form validation script
├── routes/             # Route definitions
│   ├── listing.js      # Listing routes
│   ├── review.js       # Review routes
│   └── user.js         # User routes
├── utils/              # Utility functions
│   ├── ExpressError.js # Custom error class
│   └── wrapAsync.js    # Async error wrapper
└── views/              # EJS templates
    ├── error.ejs       # Error page
    ├── includes/       # Reusable partials
    │   ├── flash.ejs   # Flash message partial
    │   ├── footer.ejs  # Footer partial
    │   └── navbar.ejs  # Navbar partial
    ├── layouts/        # Layout templates
    │   └── boilerplate.ejs # Base layout
    ├── listings/       # Listing templates
    │   ├── edit.ejs    # Edit listing form
    │   ├── index.ejs   # Listing index page
    │   ├── new.ejs     # New listing form
    │   └── show.ejs    # Listing details page
    └── users/          # User templates
        ├── login.ejs   # Login form
        └── signup.ejs  # Signup form

# API Endpoints
GET /listings: Display all listings.
GET /listings/new: Display form to create a new listing.
POST /listings: Create a new listing.
GET /listings/:id: Display details of a specific listing.
GET /listings/:id/edit: Display form to edit a listing.
PUT /listings/:id: Update a listing.
DELETE /listings/:id: Delete a listing.
POST /listings/:id/reviews: Create a new review for a listing.
DELETE /listings/:id/reviews/:reviewId: Delete a review.
GET /signup: Display signup form.
POST /signup: Register a new user.
GET /login: Display login form.
POST /login: Authenticate user and create session.
GET /logout: Logout user and destroy session.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with descriptive messages.
Push your changes to your fork.
Submit a pull request.
License
MIT
```
