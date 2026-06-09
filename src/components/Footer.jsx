import { Link } from "react-router-dom";
import { nav, brand } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer theme-dark">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-word">Caribelle</p>
            <p className="footer-word footer-word-2">Advisory</p>
            <p className="lede measure-sm footer-tag">
              MBB-grade strategy &amp; operations — partner-direct across the
              Caribbean and North America.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <p className="footer-h">Navigate</p>
              <ul>
                <li>
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="footer-link">{n.label}</Link>
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
                <li>
                  <Link to="/contact" className="footer-link">Start a conversation</Link>
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
