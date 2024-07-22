import Post from "../components/Post";
import { posts } from "../data/profile";

function BlogPage() {
  return (
    <div>
      <h1 className="md:text-4xl mb-5 text-3xl font-bold text-center">
        Mi Blog
      </h1>
      <div className="md:grid-cols-3 grid grid-cols-1 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
