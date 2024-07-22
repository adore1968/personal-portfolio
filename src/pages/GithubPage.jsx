import Loader from "../components/Loader";
import { useApp } from "../context/AppContext";

function GithubPage() {
  const { isLoading, user } = useApp();

  if (isLoading) return <Loader />;
  console.log(user);

  return (
    <div className="max-w-xl p-5 mx-auto text-center border">
      <h1 className="md:text-4xl text-3xl font-bold">{user.name}</h1>
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-40 mx-auto my-5 rounded-full"
      />
      <p className="md:text-2xl text-xl font-medium">{user.bio}</p>
      <div className="flex flex-col gap-2 mt-5">
        <a
          href={user.repos_url}
          target="_blank"
          className="md:text-xl hover:bg-red-500 hover:text-gray-50 px-4 py-2 text-lg transition-colors border rounded"
        >
          Repositorios
        </a>
        <a
          href={user.html_url}
          target="_blank"
          className="md:text-xl hover:bg-red-500 hover:text-gray-50 px-4 py-2 text-lg transition-colors border rounded"
        >
          Ir a Github
        </a>
      </div>
    </div>
  );
}

export default GithubPage;
