import type { Metadata } from "next";
import { mediaCategories } from "../data";
import { MediaGrid } from "@/components/media-grid";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Media", description: "Joshua Van fight night, training, lifestyle, and Myanmar media." };

export default function MediaPage() {
  return <main id="content">
    <PageHero index="03" eyebrow="Media room" title="Inside the" accent="work." intro="Fight nights, hard rounds, and the life around them. Official team media lands here." />
    <section className="media-archive section-shell">
      <div className="filter-row" aria-label="Media categories">{mediaCategories.map((category, index) => <span className={index === 0 ? "active" : ""} key={category}>{category}</span>)}</div>
      <MediaGrid />
      <p className="data-note">Phase 3 art-directed placeholders are ready for team-approved photography and video.</p>
    </section>
    <SiteFooter />
  </main>;
}
