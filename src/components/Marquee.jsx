// Seamless infinite marquee. Children are duplicated once so the track can
// translate -50% and loop without a visible seam. Pauses on hover (see CSS).
export default function Marquee({ items, render, speed = 42, reverse = false }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" data-reverse={reverse ? "true" : "false"}>
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${speed}s` }}
      >
        {loop.map((item, i) => (
          <div
            className="marquee-item"
            key={i}
            aria-hidden={i >= items.length ? "true" : undefined}
          >
            {render(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
