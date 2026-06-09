import { useState } from "react";

// Brand mark (real, via Google's favicon service) + company name lockup.
// Reliable and always renders; if the mark fails we simply show the name.
// Swap in official SVG marks later by dropping files in /public/logos.
export default function ClientLogo({ name, domain }) {
  const [failed, setFailed] = useState(false);
  const src = `/logos/${domain}.png`;

  return (
    <div className="client-chip" title={name}>
      {!failed && (
        <img
          className="client-mark"
          src={src}
          alt=""
          width="26"
          height="26"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <span className="client-name">{name}</span>
    </div>
  );
}
