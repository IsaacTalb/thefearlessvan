import { fighter } from "./data";
import { ArrowDown, ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MediaGrid } from "@/components/media-grid";

const tickerItems = [fighter.record, "World champion", "The fearless", "Myanmar", "All pressure"];

export default function Home() {
  return <main id="content">
    <SiteHeader />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" /><div className="hero-orbit hero-orbit-one" aria-hidden="true" /><div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-kicker"><span className="status-dot" />UFC Flyweight World Champion</div>
      <p className="hero-side hero-side-left">Hakha · Myanmar</p><p className="hero-side hero-side-right">Houston · Texas</p>
      <div className="hero-title-wrap"><p className="eyebrow">Built different · Built fearless</p><h1 id="hero-title"><span>Joshua</span><span className="outline-word">Van</span></h1></div>
      <div className="hero-mark" aria-hidden="true"><span>J</span><i>×</i><span>V</span></div>
      <div className="hero-bottom"><p>From Myanmar<br />to the world.</p><a href="#story" className="round-link" aria-label="Discover Joshua Van's story"><ArrowDown /></a><p className="hero-record"><strong>{fighter.record}</strong> Professional record</p></div>
    </section>

    <div className="ticker" aria-label="Joshua Van highlights"><div className="ticker-track">
      {[...tickerItems, ...tickerItems].map((item, i) => <span key={`${item}-${i}`}>{item}<i>✦</i></span>)}
    </div></div>

    <section className="manifesto section-shell" id="story"><Reveal>
      <div className="section-label"><span>01</span> The mindset</div>
      <p className="manifesto-copy">Pressure doesn&apos;t<br />break him. <em>It builds him.</em></p>
      <div className="manifesto-footer"><p>Born in Hakha. Forged in Houston. Joshua Van carries a nation with him every time the cage closes.</p><a href="/story" className="text-link">Discover the story <ArrowUpRight /></a></div>
    </Reveal></section>

    <section className="stats" aria-label="Career statistics">{fighter.stats.map((stat, i) => <Reveal className="stat" key={stat.label}>
      <span className="stat-index">0{i + 1}</span><strong>{stat.value}</strong><p>{stat.label} {"suffix" in stat && <small>{stat.suffix}</small>}</p>
    </Reveal>)}</section>

    <section className="journey section-shell" id="journey">
      <Reveal><div className="section-heading"><div className="section-label light"><span>02</span> The journey</div><h2>Myanmar<br /><i>to the world.</i></h2></div></Reveal>
      <div className="timeline">{fighter.journey.map((item, i) => <Reveal className="timeline-item" key={item.year}>
        <span className="timeline-number">{String(i + 1).padStart(2, "0")}</span><p className="timeline-year">{item.year}</p><h3>{item.title}</h3><p className="timeline-copy">{item.copy}</p>
      </Reveal>)}</div>
    </section>

    <section className="fight-section section-shell" id="fights">
      <Reveal><div className="section-heading fight-heading"><div className="section-label"><span>03</span> Fight mode</div><h2>Always<br /><i>forward.</i></h2></div></Reveal>
      <Reveal className="fight-card">
        <div className="fight-meta"><span>Latest chapter</span><span>World title · 125 lb</span></div>
        <div className="fight-versus"><div><small>The fearless</small><strong>Van</strong></div><span className="vs">VS</span><div className="opponent"><small>Next challenger</small><strong>TBA</strong></div></div>
        <div className="fight-footer"><span className="live-pill"><i /> Awaiting announcement</span><a href="/fights">View fight history <ArrowUpRight /></a></div>
      </Reveal>
    </section>

    <section className="media-section" id="media">
      <div className="media-panel media-panel-left"><span>Training</span><strong>Built in<br />the dark.</strong></div><div className="media-monogram" aria-hidden="true">JV</div><div className="media-panel media-panel-right"><span>Fight night</span><strong>Seen by<br />the world.</strong></div>
    </section>
    <section className="home-gallery section-shell"><Reveal><div className="section-label"><span>04</span> Off the canvas</div><h2>Inside<br /><i>the work.</i></h2></Reveal><MediaGrid compact /><a className="text-link gallery-link" href="/media">Explore all media <ArrowUpRight /></a></section>

    <section className="partners section-shell" id="partners"><Reveal>
      <div className="section-label"><span>05</span> Partners</div><h2>Build with<br /><i>the champion.</i></h2><p>For brand partnerships, press, sponsorships, and professional enquiries.</p><a className="button-link" href="/partners">Partner with Joshua <ArrowUpRight /></a>
    </Reveal></section>
    <SiteFooter />
  </main>;
}
