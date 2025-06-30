import Link from "next/link";
import { Post } from "@/types/post";
import styles from "../styles/Home.module.css";

export const revalidate = 60;

export default async function BlogList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className={styles.container}>
      <h2>Blog Listing (Updates Every 60 Seconds)</h2>
      <ul>
        {posts.slice(0, 10).map((post: Post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
