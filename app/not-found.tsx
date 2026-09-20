import Link from "next/link";
export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>Wrong<br /><i>corner.</i></h1><p>This page stepped outside the cage.</p><Link className="button-link" href="/">Back home →</Link></main>;
}
