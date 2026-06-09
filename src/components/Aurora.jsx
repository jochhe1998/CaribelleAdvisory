// Slow drifting aurora blobs — atmosphere for dark/forest sections.
export default function Aurora({ variant = "teal" }) {
  return (
    <div className={`aurora aurora-${variant}`} aria-hidden="true">
      <span className="aurora-blob b1" />
      <span className="aurora-blob b2" />
      <span className="aurora-blob b3" />
    </div>
  );
}
