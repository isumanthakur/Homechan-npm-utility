# Homechan CLI

Homechan CLI is a utility to generate boilerplate code for a Vite React app with various pages and components. It simplifies the creation of a fully functional React project with Tailwind CSS, Redux, and React Router. It supports light and dark themes and comes with predefined pages like Home, About, Contact, Login, and Signup.

## Features

- Generate boilerplate code for React Vite projects
- Predefined pages: Home, About, Contact, Login, Signup
- Redux state management setup
- Light and dark themes with Tailwind CSS
- Easy-to-use CLI commands

## Installation

First, install Homechan globally:

```sh
npm install -g homechan

Prerequisites

Ensure you have a Vite React app set up. If not, create one using the following commands:

## create the vite react app first 
npm create vite@latest my-vite-app --template react
cd my-vite-app
npm install


##install tailwind css

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


##install the project dependencies 

npm install react-redux @reduxjs/toolkit react-router-dom @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core

##then install our package 

npm i homechan

## u are all set to go :), below are the set of command for each page respectievely , as u can see the naming convention is easy to remeber 

homechan home
homechan about
homechan contact
homechan login
homechan signup
homechan header
homechan footer
homechan theme

## if u feel super lazy for some reason, just run 

homechan basic


##the -basic command generates an entire webiste with black and white theme, with 2 theme modes light and dark, with redux state management as well as react router dom, u can just costomize it according to your liking, the file structure will look like this


my-vite-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   ├── features/
│   │   └── theme/
│   │       └── themeSlice.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js






## Contributions are welcome! Please submit a pull request or open an issue to help improve the project.


## we are constantly adding new command for differnt pages (eccommerce product page ) and also some full website tabplates depending on differnt needs, our utility not only it saves time but also frees you from doing the same basic thing over and over again. Happy coding :)

