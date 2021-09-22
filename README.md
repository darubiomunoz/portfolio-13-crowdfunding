[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
Project Link: [https://darubiomunoz.github.io/portfolio-13-crowdfunding](https://darubiomunoz.github.io/portfolio-13-crowdfunding)
<br />
<p align="center">
  <a href="https://darubiomunoz.github.io/portfolio-13-crowdfunding">
    <img src="./src/assets/images/readme-logo.svg" alt="Logo" width="200" height="200">
  </a>
  <h1 align="center">Crowdfunding</h1>
  <p align="center">
    ReactJS
    <br />
    <a href="https://reactjs.org/docs/getting-started.html"><strong>Explore the ReactJS's docs »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS --> 
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#status">Status</a></li>
    <li><a href="#what-i-learned">What I learned</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## 1. About The Project :round_pushpin:

![Product Name Screen Shot][product-screenshot]
![Product Name Screen Shot][product-screenshot-frontend]
![Product Name Screen Shot][product-screenshot-mobile]

This project is a ***mini web app*** that consumes data from an ***API*** with fetch and the ***HTTP Protocol*** made using a service called ***JSONbin***.

This ***Crowdfunding*** web site is composed by a Home page and two ***modals*** windows that pop up whenever you interact with its pledges.

Also I want to ***use styled components*** and ***Redux*** for the state management of site combined with ***Redux Thunk*** to make asynchronous logic inside ***Redux*** :stars:.

* [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) _version: 5_
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) _version: 3_
* [Styled Components](https://styled-components.com/) _version: 5.3.1_
* [React](https://reactjs.org/) _version: 17.0.1_
* [Creact-React-App](https://create-react-app.dev/) _version: 4.0.3_
* [React DOM](https://reactjs.org/docs/react-dom.html) _version: 17.0.2_
* [React Scripts](https://create-react-app.dev/docs/available-scripts/) _version: 4.0.3_
* [Redux](https://redux.js.org/) _version: 4.0.5_
* [Redux Thunk](https://redux.js.org/) _version: 2.3.0_
* [React Redux](https://react-redux.js.org/) _version: 7.2.5_
* [Redux Toolkit](https://redux-toolkit.js.org/) _version: 1.6.1_
* [Normalize](https://necolas.github.io/normalize.css/) _version: 8.0.1_
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) _version: ECMAScript 6+_

<!-- GETTING STARTED -->
## 2. Getting Started :fire:

If you want to check out the website in production with github pages visit the link below.

* Link to the project:
  ```sh
  https://darubiomunoz.github.io/portfolio-13-crowdfunding
  ```

### Installation  :exclamation:

1. Install create-react-app globally in your device
   ```sh
    npm install -g create-react-app
   ```

2. Clone the repo
   git clone https://github.com/darubiomunoz/portfolio-13-crowdfunding.git
   ```
   ```sh
   git clone git@github.com:darubiomunoz/portfolio-13-crowdfunding.git
   ```
   ```sh
   gh repo clone darubiomunoz/portfolio-13-crowdfunding
   ```

3. Install all the dependencies required with:
   ```sh
   npm install
   ```

4. Run the react development server:
    ```sh
    npm run start
    ```
<!-- USAGE EXAMPLES -->
## 3. Usage :star2:

Feel free to download the code if you need a template for your own ***project*** and modify it as you want to fit your own requirements, just remember to install all the dependencies to run it properly.

_For more knowledge, please refer to the [Documentation](https://reactjs.org/)_

<!-- CONTRIBUTING -->
## 4. Contributing :tada:

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- Status -->
## 5. Status :memo:

The project is `Finished`.

<!-- WHAT I LEARNED -->
<!--
Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.
 -->
## 6. What I learned :mortar_board:

In this particular case, the project was fun, and dynamic. I had an issue with ***react router*** because it does not support scrolling with hash hyperlinks inside the same page using the ***Link*** feature. So I had to install in the project a small library that fix this problem called ***react-router-hash-link*** and use it in the Navbar.js component.

```
  import { HashLink as Link } from "react-router-hash-link";

  <li className="navbar_item">
    <Link className="navbar_link" to={`#${option}`}>
      {option}
    </Link>
  </li>
```

I had no clue about this issue and I have never heard about this library so that It was a nice experience find a solution to this issue by creating a project.

<!-- LICENSE -->
## 7. License :memo:

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## 8. Contact :e-mail:

Diego Rubio
[Linkedin](https://www.linkedin.com/in/darmdev/)
darubiomunoz@gmail.com

Project Link: [https://darubiomunoz.github.io/portfolio-13-crowdfunding](https://darubiomunoz.github.io/portfolio-13-crowdfunding)

<!-- ACKNOWLEDGEMENTS -->
## 9. Acknowledgements :clap:


* [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [Styled Components](https://styled-components.com/)
* [React](https://reactjs.org/)
* [Creact-React-App](https://create-react-app.dev/)
* [React DOM](https://reactjs.org/docs/react-dom.html)
* [React Scripts](https://create-react-app.dev/docs/available-scripts/)
* [Redux](https://redux.js.org/)
* [Redux Thunk](https://redux.js.org/)
* [React Redux](https://react-redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Normalize](https://necolas.github.io/normalize.css/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)

:copyright: _Diego Rubio - 2021_

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/darubiomunoz/portfolio-06-profilecardcomponent/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/darmdev/
[product-screenshot]: ./src/assets/images/code.png/
[product-screenshot-frontend]: ./src/assets/images/screenshot_desktop.png
[product-screenshot-mobile]: ./src/assets/images/screenshot_mobile.png