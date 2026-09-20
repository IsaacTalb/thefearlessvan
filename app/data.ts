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
export const navigation = ["Story", "Fights", "Media", "Partners"] as const;
