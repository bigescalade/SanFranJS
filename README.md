# Title & Description

## SanFranJS

A map of filming locations in San Francisco built with ReactJS.

### Please note

This project is no longer maintained

# Table of Contents

1. [Environments](#environments)
2. [System Dependencies & Configuration](#system-dependencies-&-configuration)
3. [Application Installation Instructions](#application-installation-instructions)
4. [Operating Instructions](#operating-instructions)
5. [Testing Instructions](#testing-instructions)
6. [Overview](#overview)
7. [Discussion](#discussion)
8. [License](#license)
9. [Contributing](#contributing)

# Environments

- IE > 11
- Firefox
- Chrome

# System Dependencies & Configuration

1.  If you don't have node installed or are using a version older than 8

    - **Mac:** `brew install node`
    - If you don't have brew installed you can run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    - **Windows:** `https://nodejs.org/en/download/`

2.  Clone the repository
3.  In the project root folder
4.  Install yarn

    - `npm install -g yarn`
    - the node version is a dependency in the package.json file, so the correct version of node will be installed (if using node version 8 or higher)

5.  Add a Google Maps API key and a Socrata API key to a `.envrc` file (see .example.envrc)

# Application Installation Instructions

Install depedencies by running `yarn install` in the project root folder

# Operating Instructions

Run the command `yarn start` in the project root folder to start

# Testing Instructions

Run the command `yarn test` in the project root folder

# Overview

This was a coding challenge I did. I was to take a list of filmin locations in San Francisco and show them on a map when a user selects one from the list. Each movie can have one or more pins, and a user should also be able to search for movies, filtering out titles that fail to match.

# Discussion

This project was the first time I used React Context. React Context is great, allowed me to avoid using Redux on this project. At first I thought Redux would be overkill, towards the end I felt I was getting close to needing it over Context.

# License

N/A

# Contributing

N/A
