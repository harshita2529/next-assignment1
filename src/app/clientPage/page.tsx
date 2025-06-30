import ClientComponent from "../components/ClientComponent";
import styles from "../styles/Home.module.css";

export default function ClientPage() {
  return (
    <div className={styles.container}>
      <h1>Client Component Example</h1>
      <ClientComponent />
    </div>
  );
}
