/* eslint-disable react/prop-types */
function Skill({ skill }) {
  const { name, percentage } = skill;
  return (
    <div>
      <h5 className="md:text-2xl text-xl mb-1.5">{name}</h5>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default Skill;
