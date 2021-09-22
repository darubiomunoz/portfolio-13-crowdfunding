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
      <a href="#about-the-project">About The Project</a>
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

This project is all about consuming an ***API of countries*** and their particular information that I'll display in two pages. Also I have to be able to search for any specific country and filter them by different categories.

In terms of challenges that I'm trying to overcome in this project are implementing hooks I haven't implemented before in other projects, that's because I just finished a course on ***React Hooks*** specifically so I want to use more hooks and probably making my own ***custom hooks*** :smile:.

Also I want to ***use styled components*** which I haven't never implemented or studied however I want to push myself a little bit and learn by doing, researching, reading documentation, and asking.

Finally I want to use Redux Thunk to make asynchronous logic inside ***Redux*** :stars:.

### Built With :computer:

This component is developed with:

* [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) _version: 5_
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) _version: 3_
* [Styled Components](https://styled-components.com/) _version: 5.2.3_
* [React](https://reactjs.org/) _version: 17.0.1_
* [Creact-React-App](https://create-react-app.dev/) _version: 4.0.3_
* [React DOM](https://reactjs.org/docs/react-dom.html) _version: 17.0.1_
* [React Scripts](https://create-react-app.dev/docs/available-scripts/) _version: 4.0.3_
* [Redux](https://redux.js.org/) _version: 4.0.5_
* [Redux Thunk](https://redux.js.org/) _version: 2.3.0_
* [React Redux](https://react-redux.js.org/) _version: 7.2.3_
* [Redux Toolkit](https://redux-toolkit.js.org/) _version: 1.5.0_
* [Normalize](https://necolas.github.io/normalize.css/) _version: 8.0.1_
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) _version: ECMAScript 6+_

<!-- GETTING STARTED -->
## 2. Getting Started :fire:

If you want to check out the website in production with github pages visit the link below.

* Link to the project:
  ```sh
  https://darubiomunoz.github.io/portfolio-11-countries
  ```

### Installation  :exclamation:

1. Install create-react-app globally in your device
   ```sh
    npm install -g create-react-app
   ```

2. Clone the repo
   git clone https://github.com/darubiomunoz/portfolio-11-countries.git
   ```
   ```sh
   git clone git@github.com:darubiomunoz/portfolio-11-countries.git
   ```
   ```sh
   gh repo clone darubiomunoz/portfolio-11-countries
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

Feel free to download the code if you need a template for your own ***project*** and modify it as you want to fit your project, just remember to install all the required dependencies to run it properly.

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

It was a very challenging project, now that I've finished the code I can say that I encountered **many problems** on the development process like a very small start because I had to research, **read documentation**, and make a lot of mistakes with the **styled components** because I knew nothing about them when I started coding.

Also, when I was coding the redux logic I had to modify the state in an object with multiple levels and I struggle to find the correct way but as always, reading documentation helped find the correct way to do it using **Redux toolkit**, and I implemented the middleware, the **Redux Thunk**, to call the API I wasn't to difficult I just followed the documentation of **Redux**.

Finally, I used many **hooks** and I created two **customs hooks** one to format numbers called useFormatNumber and another to find the name of a country by its alpha 3 code called useFindName.

These are some fractions of code where I struggled and came up with solutions.

```
  export default function useformatNumber() {
    const formatNumber = (string) => {
      string += "";
      var x = string.split(".");
      var x1 = x[0];
      var x2 = x.length > 1 ? `${"." + x[1]}` : "";
      var regex = /(\d+)(\d{3})/;

      while (regex.test(x1)) {
        x1 = x1.replace(regex, "$1" + "," + "$2");
      }

      return x1 + x2;
    };

    return formatNumber;
  };
```
```
  import { useSelector } from 'react-redux';

  export default function useFindName() {
    const countries = useSelector(state => state.countries.dataSafeCopy);
  
    const findName = code => {
      const country = countries.find(country => country.alpha3Code === code);
      return country.name;
    };

    return findName;
};
```

```
  export const light = {
    background1: colorOption5,
    background2: '',
    text1: colorOption1,
    text2: colorOption1,
    shadow: boxShadow,
  };

  export const dark = {
    background1: colorOption1,
    background2: colorOption2,
    text1: colorOption5,
    text2: colorOption4,
    shadow: '',
  };
```

```
  const { alphacode } = useParams();
```

<!-- LICENSE -->
## 7. License :memo:

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## 8. Contact :e-mail:

Diego Rubio
[Linkedin](https://www.linkedin.com/in/darmdev/)
darubiomunoz@gmail.com

Project Link: [https://darubiomunoz.github.io/portfolio-11-countries](https://darubiomunoz.github.io/portfolio-11-countries)

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