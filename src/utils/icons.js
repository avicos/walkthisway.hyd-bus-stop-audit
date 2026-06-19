import L from "leaflet";

export const userIcon = L.divIcon({
  html: `
    <div
      style="
        width:16px;
        height:16px;
        border-radius:50%;
        background:#2563eb;
        border:3px solid white;
        box-shadow:0 0 4px rgba(0,0,0,0.4);
      "
    ></div>
  `,
  className: "",
});

export const stopIcon = L.divIcon({
  html: `
    <div
      style="
        width:14px;
        height:14px;
        border-radius:50%;
        background:#16a34a;
        border:2px solid white;
      "
    ></div>
  `,
  className: "",
});

export const auditedStopIcon = L.divIcon({
  html: `
    <div
      style="
        width:28px;
        height:28px;
        border-radius:50%;
        background:#22c55e;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:16px;
        font-weight:bold;
        border:2px solid white;
        box-shadow:0 2px 6px rgba(0,0,0,.3);
      "
    >
      ✓
    </div>`,
  className: "",
  iconSize: [28, 28],
});