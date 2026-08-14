import styles from "./Menu.module.css";

export default function Menu({
  menuOpen,
  setMenuOpen,
  viewMode,
  setViewMode,
  setIsAddingStop,
  recenterMap,
}) {
  const handleAction = (action) => {
    action();
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.actions} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.action}
          onClick={() =>
            handleAction(() => {
              setViewMode("audit");
            })
          }
        >
          <span>Audit</span>
          <span>Stop</span>
        </button>

        <button
          className={styles.action}
          onClick={() =>
            handleAction(() => {
              setViewMode("public");
            })
          }
        >
          <span>Public</span>
          <span>View</span>
        </button>

        <button
          className={styles.action}
          onClick={() =>
            handleAction(() => {
              setIsAddingStop(true);
            })
          }
        >
          <span>Add</span>
          <span>Stop</span>
        </button>

        <button
          className={styles.action}
          onClick={() => handleAction(recenterMap)}
        >
          <span>Recenter</span>
        </button>
      </div>

      <button
        className={`${styles.hamburger} ${
          menuOpen ? styles.hamburgerOpen : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}