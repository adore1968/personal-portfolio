import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Post({ post }) {
  const { title, content, image } = post;
  return (
    <div className="flex flex-col border">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="hover:scale-150 min-h-[207px] object-cover w-full transition-transform"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <h3 className="md:text-3xl my-1 text-2xl font-medium mb0.5">
            {title}
          </h3>
          <p className="mb-5 text-lg">{content}</p>
        </div>
        <Link
          href="#"
          className="md:text-xl hover:bg-red-500 w-fit hover:text-gray-50 block px-4 py-2 text-lg transition-colors rounded"
          to={`/posts/${post.title}`}
        >
          Ver proyecto
        </Link>
      </div>
    </div>
  );
}

export default Post;
