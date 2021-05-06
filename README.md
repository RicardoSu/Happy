<h1 align="center">Next Level Week "Happy". 😃</h1>
<p align="center">
      <img src="https://github.com/RicardoSu/Happy/blob/main/Images/demos/Desktop/main_page.PNG" alt="Happy Logo"/>
</p>

<h2 align="center">About 📖</h2>
   
   <p align="center">
      Happy is a project that aims to facilitate visits to orphanages near you 💜 This is a project developed during Next Level Week, held by @Rocketseat <a href="https://rocketseat.com.br/">Rocketseat</a> during October 12-18, 2020.
   </p>

   - ✅ "Accelerating Your Evolution" 💪
   - ✅ "Looking at opportunities" 👀
   - ✅ "The Stack's Choice" 📌
   - ✅ "Up to two years in 2 months" 🔥
   - ✅ "The extra mile" 🚀

---

<h2 align="center">Preview 💻📱</h2>

   <p align="center">
      <img src="https://github.com/RicardoSu/Happy/blob/main/Images/demos/Desktop/second_image.PNG" width="90%" alt="Happy Demo"/>
   </p>

---

<h2 align="center">Layout 🎨</h2>

   <p align="center">
      The Layout was developed by <a href="https://instagram.com/tiagoluchtenberg">Tiago Luchtenberg</a>, and you can access it on Figma:
      
   - <a href="https://www.figma.com/file/XYb2tha1gU5M8vTwTUmjNx/Happy-Web-(Copy)?node-id=0%3A1">Desktop</a> 🖥️
   - <a href="https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile?node-id=0%3A1">Mobile</a> 📱
   </p>

---

<h2 align="center">Functionalities 🛠️</h2>

- Bring happiness to the world! 🥳
- Encourage people to visit orphanages!
- You can create and register orphanages;
- You can mark the days for visiting orphanages;
   - Accessing opening hours and days 📅,
   - Schedule visits,
   - Get in touch via Whatsapp 📞,
   - View directions via Google Maps 🗺
- Browse different tabs and pages;

---

<h2 align="center">Technologies 🚀</h2>

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [SQLite](https://www.sqlite.org/index.html)
- [Handlebars](https://handlebarsjs.com/)
- [JavaScript](https://www.javascript.com/)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [HTML](https://html.com/)

---

<h2 align="center">Notion Files 📋</h2>

- [NLW3 #03](https://www.notion.so/NLW-Discovery-03-628a2c1b9ac744e28fad80046b699aab) 🚀
- [Front-end](https://www.notion.so/Front-end-010548f316d04d65a0d8b72865874ed1) ☕
- [Back-end](https://www.notion.so/Back-end-ff655163e56b4927ae7a7a4e08049e64) 👨‍🍳
- [Database](https://www.notion.so/Banco-de-Dados-ba70111f89924bda94bb1016f12df8c8) 📦

---

## ⚙ Installation and Start

This repository is a monorepo, so it will hold the sources for the **Web**, **API** and **Mobile** project. Each part of the project has its dependencies and you need to install them individually before running, so make sure you have [NPM](https://www.npmjs.com/) or [YARN](https://yarnpkg.com/) installed in your environment, plus of course the cloned repository in your environment.

Clone the repository with:

```bash
> git clone https://github.com/matheusfelipeog/happy.git
```

The demos use **YARN** for standardization, but if you use **NPM**, just replace where it says `yarn` with `npm`.

**Installing web project dependencies:**

```bash
> cd happy/web
> yarn install
```

To run the full **web** project you must have a Mapbox API authentication **token**. Log into your account on the site and create a token to use for the project. With the token in hand, create an `.env` file and put your token as the value of the `REACT_APP_MAPBOX_TOKEN` key.

Example:

```text
REACT_APP_MAPBOX_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Now start the project in your environment with:

```bash
> yarn start
```

Go to: [`http://127.0.0.1:3000/`](http://127.0.0.1:3000/) para visualizar.


**Installing dependencies for the backend project:**

```bash
> cd happy/backend
> yarn install
```

To run the **backend** project you need to create the database with all the tables used, to do this use the corresponding directory:

```bash
> yarn typeorm migration:run
> yarn dev
```

Go to: [`http://127.0.0.1:3333/`](http://127.0.0.1:3333/) to vizualize.

---

<h2 align="center">How to Contribute 💪</h2>

   ```
   - Fork the project 

   - Create a new branch with your changes:
   $ git checkout -b my-feature

   - Save your changes and create a commit message telling you what you did:
   $ git commit -m "feature: My new feature"

   - Submit your changes:
   $ git push origin my-feature
   ```

---

<h2 align="center">License 📝</h2>

<p align="center">
   This repository is under MIT license. You can see the <a href="https://github.com/RicardoSu/Happy/blob/main/LICENSE">LICENSE</a> file for more details.
</p>

   ---

   >This project was developed, with the instructor **[@MaykBrito](https://linkedin.com/in/maykbrito)**, during the **[Next Level Week](https://rocketseat.com.br/)** of **[Rocketseat](https://www.linkedin.com/school/rocketseat/about/)** 💜. <br> 

---


