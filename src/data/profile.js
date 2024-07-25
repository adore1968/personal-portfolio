import portfolio1 from "/portfolio1.png";
import portfolio2 from "/portfolio2.png";
import portfolio3 from "/portfolio3.png";
import portfolio4 from "/portfolio4.png";
import portfolio5 from "/portfolio5.png";
import portfolio6 from "/portfolio6.png";

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
  {
    name: "Java",
    percentage: 65,
  },
  {
    name: "Spring",
    percentage: 75,
  },
  {
    name: "MySQL",
    percentage: 70,
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
    name: "React & Firebase Login con API Context (Firebase Authentication) y Tailwindcss",
    description:
      "En este proyecto aprendí a crear una aplicacion web con React y Firebase que permite Registrar y hacer Login de usuarios. En este ejemplo usare Firebase Authentication para poder registar usuarios con email, contraseña y usando oauth Google, la app esta completamente estilizada con TailwindCSS y manejo las diferentes rutas de la pagina con react-router-dom.",
    image: portfolio3,
    repoUrl: "https://github.com/adore1968/react-firebase-app",
  },
  {
    name: "App Full Stack: Challenge Foro Hub",
    description:
      "Mi objetivo con este proyecto fue implementar un CRUD comunicandome con la API REST creada por mi en Practicando Spring Framework: Challenge Foro Hub, utilice herramientas como React con hooks como useState y useEffect para manejar los datos enviados desde el servidor y cree un contexto con createContext para poder manejar el estado de una manera global React Router Dom para crear las diferentes rutas de la pagina, TailwindCSS para la estilizacion y ViteJS para generar esta app de manera rapida y sencilla.",
    image: portfolio4,
    repoUrl: "https://github.com/adore1968/forohub-client",
  },
  {
    name: "MERN Stack con MySQL - React MySQL CRUD (Context API, TailwindCSS)",
    description:
      "Con este proyecto aprendi a crear una aplicación web fullstack usando el Stack MERN (MySQL, Express, React, Node), solo que usare en mi caso MySQL en lugar de Mongodb. Primero creare una aplicacion Backend usando Javascript del lado Servidor con Nodejs, Express, y MySQL y luego creare un frontend de React usando Vite (un generador de proyectos alternativo a create-react-app), lo que creare es un tipico CRUD (Create, Read, Update, Delete) de tareas desde cero.",
    image: portfolio5,
    repoUrl: "https://github.com/adore1968/mern-stack-con-mysql",
  },
  {
    name: "Nodejs React Mongodb Login y CRUD (Aplicación FullStack)",
    description:
      "Esta es una aplicación web Fullstack con el stack MERN (MongoDB, Express, React, Nodejs) usando Nodejs como Backend y Mongodb como base de datos NoSQL, y React como aplicacion frontend usando modulos como react-hook-form, react-router-dom, tailwindcss para estilizar la app y otros mas, ademas de usar JSON Web Tokens, cookies para la autenticacion/autorizacion, desarrollando una REST API validando los datos con el modulo zod y la creacion de un servidor con Express.",
    image: portfolio6,
    repoUrl: "https://github.com/adore1968/mern-crud-auth",
  },
];

export const conocimientos = [
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
