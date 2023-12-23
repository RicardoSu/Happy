<h1 align="center">
    <img alt="Happy" title="Happy" src=".github/logo.png" />
</h1>

<h3 align="center">
  Happy - Make children's day happy
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/ricardo-software/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Ricardo%20Suarez-%2315C3D6"></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/RicardoSu/Happy?color=15C3D6">
  <a href="https://github.com/RicardoSu/Happy/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/RicardoSu/Happy?color=15C3D6"></a>
  <img alt="GitHub" src="https://img.shields.io/github/license/RicardoSu/Happy?color=15C3D6">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>


<p align="center">
  <img alt="Happy" src=".github/happy.png" width="100%">
</p>

## 🧸 About the project

Happy is an application that connects people to institutional care homes to make many children's day happier

## 🚀 Technologies

Technologies that I used to develop this application

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://github.com/axios/axios)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- [Expo](https://expo.io/)

```bash
$ git clone https://github.com/RicardoSu/Happy && cd Happy
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to backend folder
$ cd backend

# Install the dependencies
$ yarn

# Use the script to run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to web folder
$ cd web

# Fix error(s)
$ export NODE_OPTIONS=--openssl-legacy-provider

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to mobile folder
$ cd mobile

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn start
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork RicardoSu/Happy
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd nlw-3

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---