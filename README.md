# Search GitHub Repositories

## Structure

- react (17.0.1)
- typescript (4.0.3)
- graphql (14.0.2)
- react-apollo (2.1.11)
- @apollo/client (3.2.5)

## Setup

### Github Setup

1. Create GitHub Access Token
2. Check `public_repo` in `repo`

### Project Setup

1. `yarn` or `npm install`
2. Create `.env.development.local` by imitating `.env.example`.
3. `REACT_APP_GITHUB_TOKEN` must be set to the GitHub Access Token you created

## How to move it around

`yarn start` or `npm start`

## Usage

You can search the Github repositories by the value you entered the form.  
The buttons next to the repository name show the number of stars and allow you to register and unregister stars.

