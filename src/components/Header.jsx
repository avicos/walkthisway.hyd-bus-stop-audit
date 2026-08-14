import { useState } from "react";
import StopSearch from "./StopSearch";
import styles from "./Header.module.css";

export default function Header({ stops, onSelect, auditCount }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Walk This Way" className={styles.logo} />

      <div className={styles.rightSection}>
        

        <div
          className={`${styles.searchContainer} ${
            searchOpen ? styles.searchOpen : ""
          }`}
        >
          {searchOpen && <StopSearch stops={stops} onSelect={onSelect} />}

          <button
            className={styles.searchButton}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label={searchOpen ? "Close search" : "Search"}
          >
            {searchOpen ? "×" : "⌕"}
          </button>
        </div>
        <div className={styles.auditCount}>
          <span className={styles.auditIcon}>🚌</span>
          <span>{auditCount}</span>
        </div>
      </div>
    </header>
  );
}
