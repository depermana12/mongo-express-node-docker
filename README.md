## Overview
The tour management system backend is designed to handle a wide range of operations, including user authentication, tour data management, querying,

Getting Started
To get a local copy up and running, follow these simple steps:

1. Clone this repository
2. Install dependencies
3. Set up environment .env variables with the following:

```
PORT=3000
MONGO_URI=mongodb+srv://
JWT_SECRET=
JWT_EXPIRE=30d
EMAIL=
EMAIL_PASS=
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525

MONGO_DB=
MONGO_HOST=
MONGO_USERNAME=
MONGO_PASSWORD=
MONGO_OPTIONS=
```



## API Endpoints

### User Authentication:

```POST /api/v1/users/signup
POST /api/v1/users/login
POST /api/v1/users/forgotPassword
PATCH /api/v1/users/resetPassword
```
### Tours:
```
GET /api/v1/tours
POST /api/v1/tours
GET /api/v1/tours/:id
PUT /api/v1/tours:id 
DELETE /api/v1/tours:id 
```

## Using Docker
Follow these steps to run the project using Docker:

1. Build the Docker image:

`docker build -t tour-management-backend .`

2. Run the Docker container:

`docker container run -d -p 3000:3000 --name tour-management-backend tour-management-backend`
