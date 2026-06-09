import { brand, sections } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer theme-dark">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-word">Caribelle</p>
            <p className="footer-word footer-word-2">Advisory</p>
            <p className="lede measure-sm footer-tag">
              MBB performance, without the price.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <p className="footer-h">Navigate</p>
              <ul>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="footer-link"
                      onClick={(e) => go(e, s.id)}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <p className="footer-h">Engage</p>
              <ul>
                <li>
                  <a href={`mailto:${brand.email}`} className="footer-link">
                    {brand.email}
                  </a>
                </li>
                <li><span className="footer-muted">{brand.location}</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-rule" />

        <div className="footer-bottom">
          <span className="footer-muted">
            © {year} {brand.name}. All rights reserved.
          </span>
          <span className="footer-muted">
            Client engagements reflect work performed during Joseph's tenure at
            the Boston Consulting Group.
          </span>
        </div>
      </div>
    </footer>
  );
}
