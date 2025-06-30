"use client";

import { useEffect, useState } from "react";
import { Post } from "../../types/post";

const ClientComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Client-Side Fetched Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientComponent;
