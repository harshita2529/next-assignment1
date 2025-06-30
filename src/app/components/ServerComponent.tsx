import { Post } from "@/types/post";

const ServerComponent = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 }, // time based revalidation for question 3
  });
  const posts = await res.json();

  return (
    <div>
      <h2>Server Fetched Posts</h2>
      <ul>
        {posts.slice(0, 5).map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default ServerComponent;
