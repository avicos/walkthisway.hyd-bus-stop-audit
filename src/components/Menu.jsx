import styles from "./Menu.module.css";

export default function Menu({
  menuOpen,
  setMenuOpen,
  viewMode,
  setViewMode,
  setIsAddingStop,
  recenterMap,
}) {
  return (
    <div className={styles.container}>
      <button
        className={styles.hamburger}
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </button>

      {menuOpen && (
        <div className={styles.dropdown}>
          <button
            onClick={() => {
              setViewMode("audit");
              setMenuOpen(false);
            }}
          >
            Audit View
          </button>

          <button
            onClick={() => {
              setViewMode("public");
              setMenuOpen(false);
            }}
          >
            Public View
          </button>

          <button
            onClick={() => {
              setIsAddingStop(true);
              setMenuOpen(false);
            }}
          >
            Add Missing Stop
          </button>

          <button
            onClick={() => {
              recenterMap();
              setMenuOpen(false);
            }}
          >
            Recenter Map
          </button>
        </div>
      )}
    </div>
  );
}