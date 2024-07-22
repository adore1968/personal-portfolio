import Curso from "../components/Curso";
import Skill from "../components/Skill";
import { cursos, projects, skills } from "../data/profile";
import Project from "../components/Project";

function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <header>
        <div className="text-gray-50 md:flex-row md:gap-0 flex flex-col gap-5 p-5 bg-gray-800">
          <div className="mr-5">
            <img
              src="/german-jose.jpeg"
              alt="personal-portfolio-img"
              className=" object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="md:text-4xl text-3xl font-bold">Germán José</h1>
            <h3 className="md:text-3xl my-1 text-2xl font-semibold">
              FullStack Developer
            </h3>
            <p className="text-lg">
              ¡Hola! Soy Germán José Gómez, un apasionado programador web
              fullstack de 20 años originario de Argentina. Desde muy joven, la
              tecnología y la programación han sido mis grandes pasiones, y me
              esfuerzo constantemente por mejorar mis habilidades y aprender
              nuevas tecnologías.
              <br /> <br />
              Mi especialidad abarca tanto el desarrollo frontend como backend,
              lo que me permite crear soluciones completas y eficientes. Manejo
              lenguajes y tecnologías como JavaScript, HTML, CSS, React,
              Node.js, Express y MongoDB, entre otros. Me gusta mantenerme
              actualizado con las últimas tendencias y herramientas en el mundo
              del desarrollo web.
            </p>
            <a
              href="https://www.linkedin.com/in/germán-gómez-8a6067246/"
              target="_blank"
              className="md:text-xl hover:bg-red-500 w-fit hover:text-gray-50 block px-4 py-2 mt-4 text-lg transition-colors rounded"
            >
              Contactame
            </a>
          </div>
        </div>
      </header>

      <section className="md:flex-row flex flex-col justify-between gap-5">
        <div className="md:w-96 md:flex-initial p-5 border">
          <h1 className="md:text-4xl mb-5 text-3xl font-bold">Skills</h1>
          <div className="flex flex-col gap-5">
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="flex-1 p-5 border">
          <h1 className="md:text-4xl mb-5 text-3xl font-bold">
            Cursos / Idiomas
          </h1>
          <ul className="flex flex-col gap-5 pl-5 mb-5 list-disc">
            {cursos.map((curso, index) => (
              <Curso key={index} curso={curso} />
            ))}
          </ul>
          <a
            href="https://www.linkedin.com/in/germán-gómez-8a6067246/details/certifications/"
            target="_blank"
            className="md:text-xl hover:bg-red-500 w-fit hover:text-gray-50 px-4 py-2 text-lg transition-colors rounded"
          >
            Ver más
          </a>
        </div>
      </section>

      <section className="p-5 bg-gray-800">
        <h1 className="md:text-4xl text-gray-50 mb-5 text-3xl font-bold text-center">
          Portafolio
        </h1>
        <div className="md:grid-cols-3 grid grid-cols-1 gap-5">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
        <a
          href="https://github.com/adore1968?tab=repositories"
          target="_blank"
          className="md:text-xl hover:bg-red-500 w-fit text-gray-50 block px-4 py-2 mx-auto mt-5 text-lg transition-colors rounded"
        >
          Más proyectos
        </a>
      </section>
    </div>
  );
}

export default HomePage;
