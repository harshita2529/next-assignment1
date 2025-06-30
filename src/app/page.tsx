import Link from "next/link";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <ul className={styles.list}>
        <li>
          {/* 1st & 3rd & 6(a) Question*/}
          <Link href="/serverPage">Server Component</Link>
        </li>
        <li>
          {/* 2nd Question */}
          <Link href="/clientPage">Client Component</Link>
        </li>
        <li>
          {/* 4th Question */}
          <Link href="/swrPage">SWR Data Fetching</Link>
        </li>
        <li>
          {/* 5th Question */}
          <Link href="/api/users">API Route Data</Link>
        </li>
        <li>
          {/* 5th Question */}
          <Link href="/users">Users List using API</Link>
        </li>
        <li>
          <Link href="/blog">Blog List (ISR)</Link>
        </li>
        <li>
          <Link href="/blog/1">Blog Post (SSR)</Link>
        </li>
      </ul>
    </div>
  );
}
