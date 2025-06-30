import ServerComponent from "../components/ServerComponent";
import styles from "../styles/Home.module.css";

export default function ServerPage() {
  return (
    <div className={styles.container}>
      <h1>Server Component Example</h1>
      <ServerComponent />
    </div>
  );
}
