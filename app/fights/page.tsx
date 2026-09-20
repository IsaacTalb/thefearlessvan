import type { Metadata } from "next";
import { fightRecord, fighter } from "../data";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Fights", description: "Selected fights and professional record for Joshua Van." };

export default function FightsPage() {
  return <main id="content">
    <PageHero index="02" eyebrow="Fight archive" title="All" accent="pressure." intro="Selected recent chapters from a career built by setting the pace and refusing to give ground." />
    <section className="record-banner"><div><span>Professional record</span><strong>{fighter.record}</strong></div><div><span>Division</span><strong>Flyweight</strong></div><div><span>Status</span><strong>Champion</strong></div></section>
    <section className="fight-list section-shell">
      <div className="list-head"><span>Result</span><span>Opponent</span><span>Event</span><span>Method</span><span>Year</span></div>
      {fightRecord.map((fight, index) => <Reveal className="fight-row" key={`${fight.event}-${fight.opponent}`}>
        <span className="result">{fight.result}</span><div><small>{fight.title ? "Title fight" : `Fight ${String(index + 1).padStart(2, "0")}`}</small><strong>{fight.opponent}</strong></div><span>{fight.event}</span><span>{fight.method}</span><span>{fight.year}</span>
      </Reveal>)}
      <p className="data-note">Selected recent bouts. Official commission and promotion records remain the source of truth.</p>
    </section>
    <SiteFooter />
  </main>;
}
