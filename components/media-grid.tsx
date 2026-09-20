const tiles = [
  { category: "Fight night", title: "Under the lights", shape: "wide", index: "01" },
  { category: "Training", title: "No easy rounds", shape: "tall", index: "02" },
  { category: "Myanmar", title: "For the flag", shape: "square", index: "03" },
  { category: "Life", title: "Houston days", shape: "square red", index: "04" },
  { category: "Fight night", title: "And still", shape: "wide", index: "05" },
] as const;

export function MediaGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? tiles.slice(0, 3) : tiles;
  return <div className={`editorial-grid ${compact ? "compact" : ""}`}>
    {items.map((tile) => <article className={`editorial-tile ${tile.shape}`} key={tile.index}>
      <div className="tile-art" aria-hidden="true"><span>JV</span></div>
      <div className="tile-copy"><span>{tile.index} · {tile.category}</span><h3>{tile.title}</h3></div>
    </article>)}
  </div>;
}
