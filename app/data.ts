export const fighter = {
  name: "Joshua Van", nickname: "The Fearless", title: "UFC Flyweight World Champion",
  record: "18–2", origin: "Hakha, Myanmar", base: "Houston, Texas",
  stats: [
    { value: "18–2", label: "Pro record" }, { value: "10", label: "UFC wins" },
    { value: "9", label: "Knockouts" }, { value: "125", label: "Weight class", suffix: "LB" },
  ],
  journey: [
    { year: "01", title: "Hakha", copy: "Where the story began." },
    { year: "19", title: "First gloves", copy: "The work became the mission." },
    { year: "21", title: "Pro debut", copy: "No shortcuts. All pressure." },
    { year: "23", title: "UFC debut", copy: "The world started watching." },
    { year: "25", title: "World champion", copy: "Myanmar on the belt." },
    { year: "NEXT", title: "The legacy", copy: "Still being written." },
  ],
} as const;
export const navigation = [
  { label: "Story", href: "/story" },
  { label: "Fights", href: "/fights" },
  { label: "Media", href: "/media" },
  { label: "Partners", href: "/partners" },
] as const;

export const fightRecord = [
  { result: "W", opponent: "Alexandre Pantoja", event: "UFC 331", method: "Decision", year: "2026", title: true },
  { result: "W", opponent: "Tatsuro Taira", event: "UFC 328", method: "TKO · R5", year: "2026", title: true },
  { result: "W", opponent: "Alexandre Pantoja", event: "UFC 323", method: "TKO · R1", year: "2025", title: true },
  { result: "W", opponent: "Brandon Royval", event: "UFC 317", method: "Decision", year: "2025", title: false },
] as const;

export const mediaCategories = ["All", "Fight night", "Training", "Life", "Myanmar"] as const;
