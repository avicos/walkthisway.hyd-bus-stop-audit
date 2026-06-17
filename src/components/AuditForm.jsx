import { useState } from "react";
import styles from "./AuditForm.module.css";

export default function AuditForm({
  selectedStop,
}) {
  const [form, setForm] = useState({
    shelter: false,
    seating: false,
    route_map: false,
    schedule: false,
    pedestrian_access: false,
    lighting: false,
    bus_bay: false,
    accessibility_ramp: false,
    comments: "",
  });

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log({
      stop_id: selectedStop.stop_id,
      stop_name: selectedStop.stop_name,
      ...form,
    });
  };

  if (!selectedStop) return null;

  return (
    <div className={styles.container}>
      <h3>{selectedStop.stop_name}</h3>

      {[
        "shelter",
        "seating",
        "route_map",
        "schedule",
        "pedestrian_access",
        "lighting",
        "bus_bay",
        "accessibility_ramp",
      ].map((field) => (
        <label
          key={field}
          className={styles.checkboxRow}
        >
          <input
            type="checkbox"
            checked={form[field]}
            onChange={(e) =>
              updateField(
                field,
                e.target.checked
              )
            }
          />

          {field.replaceAll("_", " ")}
        </label>
      ))}

      <textarea
        className={styles.comments}
        placeholder="Comments..."
        value={form.comments}
        onChange={(e) =>
          updateField(
            "comments",
            e.target.value
          )
        }
      />

      <button
        className={styles.submitButton}
        onClick={handleSubmit}
      >
        Submit Audit
      </button>
    </div>
  );
}