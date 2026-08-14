import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/logo.png"
        alt="Walk This Way"
        className={styles.logo}
      />
    </header>
  );
}