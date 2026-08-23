export const couple = {
  bride: "Shivani",
  groom: "Jayanth",
  fullNames: "Shivani & Jayanth",
  weddingDate: new Date("2026-08-27T09:30:00+05:30"),
  displayDate: "27 . 08 . 2026",
  longDate: "The Twenty Seventh of August, 2026",
  tagline: "Together with our families, we invite you to celebrate our sacred union.",
};

export const site = {
  // Add your real Git repository URL here before publishing.
  repositoryUrl: "https://github.com/jayanth-valmiki/jayanth-shivani-wedding",
};

export const contact = {
  name: "Jayanth Valmiki",
  phone: "+91 6301292799",
  email: "shivanijayanth7@gmail.com",
};

export type EventItem = {
  key: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  quote: string;
  mapUrl: string;
  accent: string;
};

export const events: EventItem[] = [
  {
    key: "haldi",
    name: "Haldi",
    date: "26 August 2026",
    time: "10:00 AM",
    venue: "Groom's Residence, Sundipenta",
    quote: "A morning of turmeric, blessings & joy.",
    mapUrl: "https://maps.app.goo.gl/XBtu2PcWxxTVUxZ38",
    accent: "#c9a227",
  },
  // {
  //   key: "sangeet",
  //   name: "Sangeet",
  //   date: "14 November 2026",
  //   time: "7:00 PM",
  //   venue: "Grand Lawn, Hyderabad",
  //   quote: "An evening of music, dance & celebration.",
  //   mapUrl: "https://maps.google.com/?q=Hyderabad",
  //   accent: "#6b2433",
  // },
  {
    key: "wedding",
    name: "Wedding",
    date: "27 August 2026",
    time: "09:30 AM",
    venue: "Sri Krishnaveni Reddy Kalyana Mandapam",
    quote: "Two souls, one sacred journey.",
    mapUrl: "https://maps.app.goo.gl/r44FVyJpRrQRU9g49",
    accent: "#4a1520",
  },
  {
    key: "sangeet",
    name: "Reception",
    date: "28 August 2026",
    time: "5:00 PM",
    venue: "Guvvalakuntal(v), Atmakur, AP",
    quote: "An evening of beautiful celebration.",
    mapUrl: "https://maps.app.goo.gl/ymbrU28F2R95ENSV6",
    accent: "#6b2433",
  },
];

export const story = [
  {
    year: "2026 — April",
    title: "First Meeting",
    icon: "💫",
    text: "A chance introduction through mutual friends that turned into long conversations, shared laughter, and the quiet feeling that something beautiful had begun.",
  },
  {
    year: "2026 — June",
    title: "The Promise",
    icon: "💍",
    text: "Surrounded by family and blessings, we exchanged rings and promises on a day we will never forget — two hearts choosing one path.",
  },
  {
    year: "2026 — August",
    title: "Forever Begins",
    icon: "🕊️",
    text: "With the grace of our elders and the love of those dearest to us, we begin our life together.",
  },
];

export const venue = {
  name: "Sri Krishnaveni Reddy Kalyana Mandapam",
  address: "Sundipenta, Srisailam Project - AP",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.806838265024!2d78.90618801057197!3d16.07551038454064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb565dde6ab85e5%3A0x9cc652c8c4313532!2sReddy%20Kalyana%20mandapam!5e0!3m2!1sen!2sin!4v1786166846011!5m2!1sen!2sin",
};
