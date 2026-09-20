import type { Metadata } from "next";
import { fighter } from "../data";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Story", description: "The journey of Joshua Van—from Hakha, Myanmar, to the world stage." };

export default function StoryPage() {
  return <main id="content">
    <PageHero index="01" eyebrow="The story" title="Made in" accent="Myanmar." intro="A story about pressure, movement, and representing something bigger than yourself." />
    <section className="story-intro section-shell"><Reveal><p className="story-lead">Before the lights, the belt, and the world stage, there was a kid from Hakha with a willingness to keep moving forward.</p></Reveal></section>
    <section className="story-chapters section-shell">
      {fighter.journey.slice(0, -1).map((item, index) => <Reveal className="story-chapter" key={item.year}>
        <div><span>Chapter {String(index + 1).padStart(2, "0")}</span><strong>{item.year}</strong></div>
        <div><h2>{item.title}</h2><p>{item.copy} Every step sharpened the pace, composure, and pressure that define The Fearless today.</p></div>
      </Reveal>)}
    </section>
    <section className="quote-section"><Reveal><blockquote>“Fear is there. You just decide to move through it.”</blockquote><p>— The Fearless mindset</p></Reveal></section>
    <SiteFooter />
  </main>;
}
