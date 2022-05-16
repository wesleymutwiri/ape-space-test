# Apespace test application

A simple application that hich takes a contract address as a URL path parameter and displays the daily volume for the pair at the given address over the past 7 days.

## Getting started

In order to get started, you will be required to clone the repository to your local machine. You'll require to have [Node JS](https://nodejs.org/en/) installed on your machine.

```bash
git clone https://github.com/wesleymutwiri/ape-space-test.git
cd ape-space-test
```

### Create a .env file

This project requires your authentication key and the endpoint to be used. Create the .env file in the root folder of the project.

```env
BASE_URL="https://example.com/"
AUTHORIZATION_TOKEN="some_super_secret_token"
```

### Run the project

```bash
npm run dev
```

## Issues

The current endpoint sometimes returns null hence you won't get the correct data.

## Potential Improvements

1. Using Typescript everywhere in the project for type checking
2. Writing tests for components and endpoints to confirm authenticity.
3. Creating a better styled application
