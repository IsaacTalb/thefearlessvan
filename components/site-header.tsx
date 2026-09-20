"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigation } from "@/app/data";
import { CloseIcon, MenuIcon } from "./icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return <header className="site-header">
    <Link className="monogram" href="/" aria-label="Joshua Van home"><span>J</span><span>V</span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {navigation.map((item) => <Link className={pathname === item.href ? "active" : ""} key={item.label} href={item.href}>{item.label}</Link>)}
    </nav>
    <Link className="header-cta" href="/contact">Join team van <span>↗</span></Link>
    <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
      {open ? <CloseIcon /> : <MenuIcon />}
    </button>
    <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <nav aria-label="Mobile navigation">
        {navigation.map((item, i) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)}><span>05</span>Join team van</Link>
      </nav>
      <p>Hakha → Houston → World</p>
    </div>
  </header>;
}
