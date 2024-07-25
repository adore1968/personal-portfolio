import { useParams } from "react-router-dom";
import { conocimientos } from "../data/profile";

function PostPage() {
  const params = useParams();
  const conocimiento = conocimientos.find(
    (post) => post.title === params.title
  );
  const { title, content, image, repoUrl } = conocimiento.project;

  return (
    <div className="p-5 border">
      <div className="text-center">
        <h1 className="md:text-4xl text-3xl font-bold">{conocimiento.title}</h1>
        <h3 className="md:text-3xl my-1 text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-lg">{content}</p>
        <img
          src={image}
          alt={title}
          className="md:w-1/2 object-cover w-full mx-auto my-5"
        />
        <a
          href={repoUrl}
          target="_blank"
          className="md:text-xl hover:bg-red-500 w-fit hover:text-gray-50 block px-4 py-2 mx-auto mt-5 text-lg transition-colors rounded"
        >
          Ver repositorio
        </a>
      </div>
    </div>
  );
}

export default PostPage;
