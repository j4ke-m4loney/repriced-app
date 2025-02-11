// src/pages/Home.tsx
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Repriced</h1>
        <p>A community moderated marketplace only for discounted properties.</p>
      </header>
      <main className={styles.main}>
        <button className={styles.ctaButton}>Browse Listings</button>
      </main>
    </div>
  );
};

export default Home;