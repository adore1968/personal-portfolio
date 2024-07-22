/* eslint-disable react/prop-types */
function Curso({ curso }) {
  const { title, description, from, to } = curso;

  return (
    <li>
      <h3 className="md:text-2xl text-xl font-medium">{title}</h3>
      <h5 className="mt-0.5 mb-1 text-lg">
        {from} - {to ? to : "Cursando"}
      </h5>
      <p className="text-lg">{description}</p>
    </li>
  );
}

export default Curso;
