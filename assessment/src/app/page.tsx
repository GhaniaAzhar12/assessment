//styles
import styles from "./page.module.css";

//templates
import LandingPage from "./Templates/LandingPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage />
    </main>
  );
}
