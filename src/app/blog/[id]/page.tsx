import styles from "../../styles/BlogDetail.module.css";

export const dynamic = "force-dynamic"; // server side rendering

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params; //as params id is giving warning
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
