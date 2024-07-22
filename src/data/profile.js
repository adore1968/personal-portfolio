import portfolio1 from "/portfolio1.png";
import portfolio2 from "/portfolio2.png";
import portfolio3 from "/portfolio3.png";
import portfolio4 from "/portfolio4.png";
import portfolio5 from "/portfolio5.jpeg";
import portfolio6 from "/portfolio6.jpeg";

import htmlCssJs from "/html-css-js.png";
import htmlCssJsProject from "/html-css-js-project.png";
import react from "/react.png";
import reactProject from "/react-project.png";
import mern from "/mern.png";
import mernProject from "/mern-project.png";

export const skills = [
  {
    name: "HTML",
    percentage: 100,
  },
  {
    name: "CSS",
    percentage: 90,
  },
  {
    name: "Javascript",
    percentage: 80,
  },
  {
    name: "React",
    percentage: 80,
  },
  {
    name: "TailwindCSS",
    percentage: 85,
  },
  {
    name: "Express",
    percentage: 70,
  },
  {
    name: "MongoDB",
    percentage: 75,
  },
];

export const cursos = [
  {
    title:
      "Curso ofrecido por FreeCodeCamp sobre Desarrollo Web Full Stack, Desarrollo de aplicaciones web",
    description: "HTML, CSS, Javascript, ReactJS, NodeJS, Express y MongoDB",
    from: 2021,
    to: 2022,
  },
  {
    title:
      "Formacion ofrecida por Alura Latam Oracle sobre Desarrollo Backend, Desarrolo de aplicaciones backend",
    description: "Java, Spring Framework, MySQL, PostgreSQL y API de Postman",
    from: 2024,
    to: 2024,
  },
  {
    title: "Ingles Total - de Principiante a Avanzado + de 115 horas",
    description:
      "Aprender todo sobre el idioma inglés, fonética, gramática, vocabulario y más!",
    from: 2024,
  },
];

export const projects = [
  {
    name: "React, Rick and Morty REST API (con Vitejs y Github Pages)",
    description:
      "En este proyecto practique las bases de React creando un proyecto sencillo usando la REST API de Rick And Morty. Creare una aplicación web que permite mostrar los personajes de la serie de television; además de usar Bootstrap para estilizar la pagina y Vitejs para crear el proyecto y finalmente desplegarlo gratuitamente en un servicio de despliegue de archivos estáticos como lo es Github Pages.",
    image: portfolio1,
    repoUrl: "https://github.com/adore1968/react-rick-and-morty-rest-api",
  },
  {
    name: "React y Redux Toolkit CRUD (con TailwindCSS)",
    description:
      "Con este proyecto pude aprender las bases de Redux de forma práctica usando Redux Toolkit y React. En este ejemplo práctico aprendí como crear una aplicacion web CRUD (Create, Read, Update, Delete) desde cero, usando Vite, react-redux y redux-toolkit. Para finalmente añadir TailwindCSS como framework de CSS.",
    image: portfolio2,
    repoUrl: "https://github.com/adore1968/react-y-redux-crud",
  },
  {
    name: "Awesome website 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra libero mi, eget malesuada eros accumsan faucibus.",
    image: portfolio3,
  },
  {
    name: "Awesome website 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra libero mi, eget malesuada eros accumsan faucibus.",
    image: portfolio4,
  },
  {
    name: "Awesome website 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra libero mi, eget malesuada eros accumsan faucibus.",
    image: portfolio5,
  },
  {
    name: "Awesome website 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra libero mi, eget malesuada eros accumsan faucibus.",
    image: portfolio6,
  },
];

export const posts = [
  {
    title: "HTML, CSS y Javascript",
    content:
      "HTML, CSS y Javascript son tres lenguajes que se utilizan en el Front End, es decir, que se utilizan en el lado del usuario.",
    image: htmlCssJs,
    project: {
      title:
        "Sitio Web con HTML, CSS y Javascript (Flexbox, CSS Grid y ScrollReveal) | Technews",
      content:
        "Este es un ejemplo práctico generado por Vite de HTML, CSS y Javascript en el que creare el diseño de un sitio web de noticias llamado Technews. Para esto usare conceptos como CSS GRID, Flexbox y una biblioteca llamada ScrollReveal. Y finalmente terminare subiendo el sitio web Gratuitamente usando Github Pages.",
      image: htmlCssJsProject,
      repoUrl: "https://github.com/adore1968/html-css-js-technews",
    },
  },
  {
    title: "React",
    content:
      "React es la biblioteca para interfaces de usuario web y nativas. Cree interfaces de usuario a partir de piezas individuales llamadas componentes escritas en JavaScript.",
    image: react,
    project: {
      title:
        "React - Aplicación de tareas con useState, useEffect y localStorage",
      content:
        "En este proyecto generado por Vite pude practicar las caracteristicas básicas de React creando una aplicacion sencilla que use useState. useEffect, creación de componentes, LocalStorage, Bootstrap para la estilizacion y que al final tambien me permite entender como desplegar una aplicación web de React Gratuitamente usando Github Pages.",
      image: reactProject,
      repoUrl:
        "https://github.com/adore1968/react-taskapp-localstorage/tree/main",
    },
  },
  {
    title: "MERN Stack",
    content:
      "MEAN Stack es un framework o conjunto de subsistemas de software para el desarrollo de aplicaciones y páginas web dinámicas que están basadas, cada una de estas, en el lenguaje de programación JavaScript. ",
    image: mern,
    project: {
      title:
        "MERN Stack con Context API (Subida de imagenes, TailwindCSS, Formik)",
      content:
        "Este es un ejemplo práctico de una aplicación web FullStack usando Mongodb, Express, React y Node (tambien nconocido como el stack MERN), Tambien usare la api de React llamada Context API para manejar el estado de manera global en nuestra aplicación, ademas de modulos como formik, axios, tailwindcss, y más.",
      image: mernProject,
      repoUrl: "https://github.com/adore1968/MERN-Stack-con-Context-API",
    },
  },
];
