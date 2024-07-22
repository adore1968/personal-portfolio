/* eslint-disable react/prop-types */
function Project({ project }) {
  const { name, description, image } = project;

  return (
    <div className="bg-gray-50 flex flex-col">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="hover:scale-150 h-full md:h-[242px] object-cover w-full transition-transform"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <h3 className="md:text-2xl mb-2 text-xl font-medium">{name}</h3>
          <p className="text-lg">{description}</p>
        </div>
        <a
          href={project.repoUrl}
          target="_blank"
          className="md:text-xl hover:bg-red-500 w-fit hover:text-gray-50 block px-4 py-2 mt-5 text-lg transition-colors rounded"
        >
          Ver repositorio
        </a>
      </div>
    </div>
  );
}

export default Project;
