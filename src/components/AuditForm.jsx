export default function AuditForm({ stop }) {
  if (!stop) return null;

  return (
    <div>
      <h3>{stop.properties.name}</h3>

      <label>
        Shelter Available
        <input type="checkbox" />
      </label>

      <label>
        Seating Available
        <input type="checkbox" />
      </label>

      <button>
        Submit Audit
      </button>
    </div>
  );
}