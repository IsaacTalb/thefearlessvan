"use client";
import { useEffect, useState } from "react";
import { navigation } from "@/app/data";
import { CloseIcon, MenuIcon } from "./icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return <header className="site-header">
    <a className="monogram" href="#top" aria-label="Joshua Van home"><span>J</span><span>V</span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
    </nav>
    <a className="header-cta" href="#contact">Join team van <span>↗</span></a>
    <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
      {open ? <CloseIcon /> : <MenuIcon />}
    </button>
    <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <nav aria-label="Mobile navigation">
        {navigation.map((item, i) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}><span>05</span>Join team van</a>
      </nav>
      <p>Hakha → Houston → World</p>
    </div>
  </header>;
}
