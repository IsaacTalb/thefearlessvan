import Link from "next/link";

export function SiteFooter() {
  return <footer id="contact">
    <div className="footer-title">Fear<br /><span>less.</span></div>
    <div className="footer-bottom">
      <Link className="monogram footer-logo" href="/" aria-label="Home"><span>J</span><span>V</span></Link>
      <p>© {new Date().getFullYear()} Joshua Van. All rights reserved.</p>
      <div><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">X / Twitter</a></div>
    </div>
  </footer>;
}
