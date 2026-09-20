import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Partners", description: "Partnership, sponsorship, and campaign opportunities with Joshua Van." };
const opportunities = [
  ["Campaigns", "Distinct athlete-led creative for global and regional launches."],
  ["Appearances", "Media, community, brand, and live-event opportunities."],
  ["Content", "Training, lifestyle, fight-week, and behind-the-scenes storytelling."],
  ["Long-term", "Authentic relationships that grow with the Joshua Van brand."],
] as const;

export default function PartnersPage() {
  return <main id="content">
    <PageHero index="04" eyebrow="Partnerships" title="Build with" accent="the fearless." intro="A young global champion, a powerful Myanmar story, and an audience that values authenticity." />
    <section className="opportunity-grid section-shell">{opportunities.map(([title, copy], i) => <Reveal className="opportunity" key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{copy}</p></Reveal>)}</section>
    <section className="partner-cta"><p>Ready to build something that moves?</p><h2>Let&apos;s<br /><i>talk.</i></h2><a className="button-link inverse" href="mailto:team@thefearlessvan.com">Start a conversation <ArrowUpRight /></a></section>
    <SiteFooter />
  </main>;
}
