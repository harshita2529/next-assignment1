"use client";

import useSWR from "swr";
import { Post } from "../../types/post";
import styles from "../styles/Home.module.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SWRComponent() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    fetcher
  );

  if (error) return <p>Failed to load</p>;

  return (
    <div className={styles.container}>
      <h1>Client(SWR) Example</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
