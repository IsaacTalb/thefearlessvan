import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Contact", description: "Contact the team representing Joshua Van." };
const contacts = [
  ["Partnerships", "Sponsorships, campaigns, appearances"], ["Media", "Interviews, press, credentials"], ["General", "Team and professional enquiries"],
] as const;

export default function ContactPage() {
  return <main id="content">
    <PageHero index="05" eyebrow="Contact" title="Talk to" accent="team van." intro="Choose the right lane and include your company, timeline, and the shape of the opportunity." />
    <section className="contact-list section-shell">{contacts.map(([title, copy], i) => <a href={`mailto:team@thefearlessvan.com?subject=${encodeURIComponent(`${title} enquiry`)}`} key={title}><span>0{i + 1}</span><div><h2>{title}</h2><p>{copy}</p></div><ArrowUpRight /></a>)}</section>
    <section className="contact-email"><span>Direct email</span><a href="mailto:team@thefearlessvan.com">team@thefearlessvan.com</a><p>Replace this launch placeholder with the official management email before publishing.</p></section>
    <SiteFooter />
  </main>;
}
