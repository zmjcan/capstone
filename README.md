# Capstone Project - The TailFinder

### Author: Maggie Mengjiao Zhang

## Overview

### Statement

**TailFinder** is an exciting new platform that helps reunite lost pets with their families. Let's bring those furry friends back where they belong!

### Problem

Losing a pet is a distressing experience. Pets cannot communicate their location, and microchips do not provide real-time tracking. Access to microchip data is restricted to shelters and authorized personnel, leaving pet owners anxious and powerless.

With **TailFinder**, we make finding lost pets easier through social posting and map pinning features. Imagine the relief and joy of reuniting with a lost pet. **TailFinder** is here to help make that happen, turning tearful moments into happy reunions!

### User Profile

- Pet lovers who:

  - have recently lost their pets

  - are happy to help searching for pets through community posting

  - want to keep track of their pets early

### Features

- As a user, I want to be able to browse and find general info on latest lost pets in my community and city
- As a user, I want to be able to post possible lost pet info by assistance of a live map
- As a user, I want to be able to share info about my pets and stories about finding my pets
- As a user, I want to be able to register and login to my account
- As a logged in user, I want to be able to access user submitted contact info
- As a logged in user, I want to be able to see my tracked pets info

## Implementation

### Tech Stack

- React

- JavaScript

- MySQL

- Express.js

- Node.js

- Knex.js

- Client libraries:

  - react

  - react-router

  - axios

- Server libraries:

  - knex

  - express

  - bcrypt

### Usage

To use the repo:
1. please download the [capstone-server](https://github.com/zmjcan/capstone-server 'server repo link') repo as well
2. create a local SQL database named `tailfinder`
2. do  `npm install`, `npm run migrate`,`npm run seed` then `npm start ` for [capstone-server](https://github.com/zmjcan/capstone-server 'server repo link') repo
2. do `npm install` then `npm run dev` for this capstone repo

### APIs

- Mapbox API was used for the first sprint to generate and display live map

- RESTful API with seven endpoints was created throughout the sprints

### Sitemap

- Home page
  - Feature story component

- Dashboard
  - Interactive 3D scene
  - Update info component
  - Browse Tracked Pets

- View + Share Pet Map
  - Live map component
  - Submit owner info
  - Pet image uploader

- Community Board
  - Pet details page
  - Submit finder Info

- Register / Login
  - Register and login components 
  - Access Contact Info through Validation

- Next Steps / Future development:
  - Add / browse Community Posts



### Mockups

<img src="./src/assets/mockups/desktop-1.png" alt="home page mockup" width="786"/>
<img src="./src/assets/mockups/Desktop-2.png" alt="community page mockup" width="786"/>


<img src="./src/assets/mockups/Desktop-3.png" alt="map page mockup" width="786"/>

<img src="./src/assets/mockups/Desktop-5.png" alt="find page mockup" width="786"/>

<img src="./src/assets/mockups/Desktop-7.png" alt="dashboard page mockup" width="786"/>

<img src="./src/assets/mockups/Desktop-8.png" alt="tail detail page mockup" width="786"/>