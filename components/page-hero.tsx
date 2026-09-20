import { SiteHeader } from "./site-header";

export function PageHero({ index, eyebrow, title, accent, intro }: { index: string; eyebrow: string; title: string; accent: string; intro: string }) {
  return <>
    <SiteHeader />
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="section-label light"><span>{index}</span> {eyebrow}</div>
      <h1>{title}<br /><i>{accent}</i></h1>
      <p>{intro}</p>
      <div className="page-hero-number" aria-hidden="true">{index}</div>
    </section>
  </>;
}
