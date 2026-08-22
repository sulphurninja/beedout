const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export type Business = {
  name: string;
  category: "Food" | "Shops" | "Health" | "Services" | "Education";
  tagline: string;
  marathi: string;
  image: string;
};

export const BUSINESSES: Business[] = [
  {
    name: "Swad Bhojnalaya",
    category: "Food",
    tagline: "Ghar jaisa thali. Full plate, full heart.",
    marathi: "स्वाद",
    image: img("1585937421612-70a008356fbe"),
  },
  {
    name: "Chaha Katta",
    category: "Food",
    tagline: "Beed's best cutting chai since forever.",
    marathi: "चहा",
    image: img("1571934811356-5cc061b6821f"),
  },
  {
    name: "Sai Sweets",
    category: "Food",
    tagline: "Pedha, jalebi, barfi — fresh every morning.",
    marathi: "गोड",
    image: img("1589301760014-d929f3979dbc"),
  },
  {
    name: "Laxmi Collection",
    category: "Shops",
    tagline: "Latest fashion. Beed prices.",
    marathi: "कपडे",
    image: img("1441986300917-64674bd600d8"),
  },
  {
    name: "New Beed Bazaar",
    category: "Shops",
    tagline: "Everything your kitchen needs, one shop.",
    marathi: "बाजार",
    image: img("1542838132-92c53300491e"),
  },
  {
    name: "FitZone Gym",
    category: "Health",
    tagline: "First gym in Beed with app-based plans.",
    marathi: "ताकद",
    image: img("1534438327276-14e5300c3a48"),
  },
  {
    name: "Glow Salon & Studio",
    category: "Health",
    tagline: "Look sharp. Book your chair online.",
    marathi: "रूप",
    image: img("1560066984-138dadb4c035"),
  },
  {
    name: "Beed Motors Garage",
    category: "Services",
    tagline: "Bike or car — fixed right, first time.",
    marathi: "गाडी",
    image: img("1486262715619-67b85e0b08d3"),
  },
  {
    name: "Spark Electricals",
    category: "Services",
    tagline: "Wiring, repairs, installs. One call away.",
    marathi: "वीज",
    image: img("1581092160562-40aa08e78837"),
  },
  {
    name: "Dnyandeep Classes",
    category: "Education",
    tagline: "10th, 12th, and beyond. Toppers made here.",
    marathi: "ज्ञान",
    image: img("1509062522246-3755977927d7"),
  },
];

export const BUSINESS_CATEGORIES = [
  "All",
  "Food",
  "Shops",
  "Health",
  "Services",
  "Education",
] as const;

export type Club = {
  name: string;
  marathi: string;
  desc: string;
  tag: string;
  members: string;
  image: string;
};

export const CLUBS: Club[] = [
  {
    name: "Beed Run Club",
    marathi: "धाव",
    desc: "Sunrise runs. City loops. Zero excuses.",
    tag: "Fitness",
    members: "Every Sunday, 6 AM",
    image: img("1552674605-db6ffd4facb5"),
  },
  {
    name: "Beed Book Club",
    marathi: "वाच",
    desc: "One book a month. Big debates over chai.",
    tag: "Culture",
    members: "Monthly meetups",
    image: img("1481627834876-b7833e8f5570"),
  },
  {
    name: "Founders Circle",
    marathi: "घडव",
    desc: "Dreamers and doers building from Beed.",
    tag: "Startups",
    members: "Pitch nights",
    image: img("1556761175-5973dc0f32e7"),
  },
  {
    name: "Creators Guild",
    marathi: "रचना",
    desc: "Reels, photos, films. Made in Beed.",
    tag: "Media",
    members: "Collab shoots",
    image: img("1502920917128-1aa500764cbd"),
  },
  {
    name: "Beed Cyclists",
    marathi: "चाल",
    desc: "Weekend rides through the Balaghat hills.",
    tag: "Outdoors",
    members: "Saturday rides",
    image: img("1541625602330-2277a4c46182"),
  },
  {
    name: "Code & Chai",
    marathi: "कोड",
    desc: "Learn to code. Ship projects. Drink chai.",
    tag: "Tech",
    members: "Weekly jams",
    image: img("1461749280684-dccba630e2f6"),
  },
];

/** Text lives in the i18n dictionary (pillars.items), zipped by index. */
export const PILLARS = [
  { href: "/community", image: img("1529156069898-49953e39b3ac") },
  { href: "/businesses", image: img("1596040033229-a9821ebd058d") },
  { href: "/bootcamps", image: img("1522202176988-66273c2fd55f") },
];

export const BOOTCAMP_IMAGES = {
  offline: img("1524178232363-1fb2b075b655"),
  online: img("1515378960530-7c0da6231fb1"),
  workshop: img("1522202176988-66273c2fd55f"),
};
