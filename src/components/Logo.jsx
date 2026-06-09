export default function Logo() {
  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#top"
      className="logo"
      onClick={toTop}
      aria-label="Caribelle Advisory — back to top"
    >
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="24" height="24">
          <path
            d="M30 12.2a11 11 0 1 0 0 15.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="logo-type">
        Caribelle<span className="logo-sub"> Advisory</span>
      </span>
    </a>
  );
}
