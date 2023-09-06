![Logo](https://demyst.com/_next/static/media/DemystLogo.72890529.svg)

# Demyst Code Kata

The goal of the project is to build a simple business loan application system.

The system consists of the following:

**Frontend**

**Backend**

The backend would integrate with third-party providers such as:

**Decision engine (Assumption) -** This is where the final application will be submitted to present the outcome of the application.

**Accounting software (Assumption) -** providers will provide a balance sheet for a selected business of the user.

## Screenshots

#### Sign Up:

![App Screenshot](https://abhishekkamble.s3.ap-south-1.amazonaws.com/Demyst/Screenshot+from+2023-09-06+10-18-45.png)

#### Sign In:

![App Screenshot](https://abhishekkamble.s3.ap-south-1.amazonaws.com/Demyst/Screenshot+from+2023-09-06+10-04-09.png)

#### Fill business details:

![App Screenshot](https://abhishekkamble.s3.ap-south-1.amazonaws.com/Demyst/Screenshot+from+2023-09-06+10-07-38.png)

#### Revieve balance sheet and details:

![App Screenshot](https://abhishekkamble.s3.ap-south-1.amazonaws.com/Demyst/Screenshot+from+2023-09-06+10-09-57.png)

#### Final submission to descision engine:

![App Screenshot](https://abhishekkamble.s3.ap-south-1.amazonaws.com/Demyst/Screenshot+from+2023-09-06+10-12-34.png)

## Run Locally

Make sure you have an LTS version of Node.js, also don't forget to input values of environment varible while running with docker or directly.

Clone the project

```bash
  git clone https://github.com/Abhishek-Kamble/Demyst-Coda-Kata.git
```

### Frontend:

Go to the project directory

```bash
  cd Demyst-Coda-Kata/frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

### Backend:

Go to the project directory

```bash
  cd Demyst-Coda-Kata/backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (Backend)

`CONNECTION_URL`

`secrete`

## Tech Stack

**Client:** ReactJS, MaterialUI

**Server:** Node.js, ExpressJs, MongoDB

## Features

- Mobile responsive UI

## Documentation

[Link for exercise](https://github.com/DemystData/code-kata/blob/main/README.md)
