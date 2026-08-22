"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/* Dictionaries                                                        */
/* ------------------------------------------------------------------ */

const en = {
  nav: {
    home: "Home",
    businesses: "Businesses",
    community: "Community",
    bootcamps: "Bootcamps",
    about: "About",
    join: "Join free",
  },
  hero: {
    eyebrow: "Beed's community & business platform",
    punch1: "All of Beed.",
    punch2: "One app.",
    sub: "Your clubs. Your shops. Your future.",
    subEm: "Starting from Beed. Built for the world.",
    ctaPrimary: "Claim your spot",
    ctaSecondary: "See the businesses",
    est: "Est. Beed, MH",
    stats: [
      { big: "1 app", small: "for the whole city" },
      { big: "Get seen", small: "every business, found online" },
      { big: "100% बीड", small: "made here, with pride" },
    ],
    ribbon: [
      "Run clubs",
      "Book clubs",
      "Kirana stores",
      "Founders",
      "Creators",
      "AI bootcamps",
      "Events",
      "Chai",
    ],
  },
  manifesto: {
    label: "The Promise",
    text: "Beed raised us. Now we build for it. Every shop — online. Every club — alive. Every young person — skilled and earning. One app for the whole city. What Beed builds today, the world joins tomorrow.",
    signoff: "— from the streets of Beed, to everywhere.",
  },
  pillars: {
    label: "What is BEEDOUT?",
    h1: "Three things.",
    h2: "That's it.",
    sub: "No complicated stuff. Meet people, grow your business, learn new skills. Done.",
    items: [
      {
        title: "Find your people",
        line: "Run. Read. Build. Create. Your club is waiting.",
        cta: "See the clubs",
      },
      {
        title: "Grow your business",
        line: "Your shop, online. Customers, incoming.",
        cta: "See the businesses",
      },
      {
        title: "Learn what's next",
        line: "AI, tech, innovation, real skills — bootcamps in Beed, online and offline.",
        cta: "See the bootcamps",
      },
    ],
  },
  phone: {
    label: "Sneak peek",
    h1: "One scroll,",
    h2: "whole city.",
    sub: "Chat with your club, catch tomorrow's event, see what's new in the market — all in one feed.",
    clubName: "Beed Run Club",
    clubMeta: "128 members · 3 online",
    messages: [
      { from: "Rohan", text: "Kankaleshwar loop tomorrow? 6 AM sharp" },
      { from: "Sneha", text: "In! Balaghat trail next week pls" },
      { from: "Omkar", text: "Chai on me after the run" },
    ],
    eventTitle: "Sunday Sunrise Run",
    eventMeta: "6:00 AM · Kankaleshwar Temple",
    rsvp: "I'm in",
    going: "42 going",
    inputHint: "Message the club…",
  },
  strip: {
    label: "Already on board",
    h: "Beed is already",
    hAccent: "here.",
    cta: "See all businesses →",
  },
  founderTeaser: {
    label: "Who's building this?",
    h1: "Built from Beed, for",
    hAccent: "Beed.",
    sub: "The story behind BEEDOUT — who's building it, and why.",
  },
  cta: {
    sticker: "Doors opening soon",
    h: "Ready, बीड?",
    sub: "Your club, your business, or your bootcamp seat. The early ones write the story.",
    placeholder: "your@email.com",
    button: "Join the waitlist",
    doneTitle: "You're in. You're early. That's the point.",
    doneSub: "We'll write to you the moment the doors open.",
    nospam: "No spam. Just the revolution.",
  },
  footer: {
    tagline:
      "All of Beed. One app. Clubs, businesses, skills — starting from Beed, Maharashtra. Built for the world.",
    platform: "Platform",
    connect: "Connect",
    madeIn: "Made with pride in Beed",
  },
  pages: {
    businesses: {
      label: "The Business Layer",
      line1: "Beed's businesses.",
      line2: "Online.",
      sub: "Shops, cafes, gyms, garages, classes — all getting found, getting customers, getting big. Simple as that.",
    },
    community: {
      label: "The Social Layer",
      line1: "Your people",
      line2: "are here.",
      sub: "Every club gets chat, events and a feed. Not another group chat that dies — a community that grows.",
    },
    bootcamps: {
      label: "The Skill Layer",
      line1: "Learn AI.",
      line2: "In बीड.",
      sub: "AI, tech and real skills — taught in your city, in your language, at your pace.",
    },
  },
  categories: {
    All: "All",
    Food: "Food",
    Shops: "Shops",
    Health: "Health",
    Services: "Services",
    Education: "Education",
  },
  sampleNote: "Sample showcase — your business could be here next",
  getOnline: {
    label: "Get yours online",
    h1: "You run the shop.",
    h2: "We run the internet.",
    sub: "Four things. That's the whole deal. No confusing packages, no tech words.",
    steps: [
      {
        title: "We build your page",
        line: "Your menu, prices, photos, location. One link. Share it everywhere.",
      },
      {
        title: "We run your Instagram",
        line: "Reels and posts that bring Beed to your door. You just run the shop.",
      },
      {
        title: "We bring you customers",
        line: "Ads and offers that turn scrolling into sales. Real orders, real footfall.",
      },
      {
        title: "We build your app",
        line: "Delivery app? Booking app? Big dream? We build it — start to finish.",
      },
    ],
    bottom:
      "Big-city agency work. Beed prices. Done by people who answer your calls.",
    button: "Put my business on BEEDOUT",
  },
  clubs: {
    features: [
      "Chat with members",
      "Share reels & photos",
      "Plan events",
      "RSVP in one tap",
      "Polls & threads",
      "Club leaderboards",
    ],
    startTitle1: "Don't see your thing?",
    startTitle2: "Start it.",
    startSub:
      "Chess. Poetry. Farming. Gaming. If three people in Beed care about it, it deserves a club.",
  },
  faq: {
    label: "Questions",
    h1: "Still thinking?",
    h2: "Fair enough.",
    items: [
      {
        q: "What is BEEDOUT, in one line?",
        a: "All of Beed — clubs, businesses and learning — in one app.",
      },
      {
        q: "Is it free?",
        a: "Joining is free. Clubs are free. Business tools have simple, honest plans — you'll know exactly what you pay for.",
      },
      {
        q: "I'm not technical. Will I get it?",
        a: "If you can use WhatsApp, you can use BEEDOUT. That's the bar we build to.",
      },
      {
        q: "When do doors open?",
        a: "Soon. The waitlist goes first — early members get first access and founding-member perks.",
      },
      {
        q: "Is this only for Beed?",
        a: "It starts in Beed. Then every city that wants what Beed has.",
      },
    ],
  },
  bootcamp: {
    formats: [
      {
        title: "Offline, in Beed",
        line: "Real classroom. Real mentors. Learn with your city, face to face.",
        tag: "Weekend batches",
      },
      {
        title: "Online, from anywhere",
        line: "Live classes on your phone or laptop. Same energy, zero travel.",
        tag: "Evening batches",
      },
    ],
    stats: ["Seats — year one", "Simple tracks", "Job & income focused"],
    trackLabel: "Pick your track",
    h1: "Start where",
    h2: "you are.",
    sub: "Never touched code? Perfect. Already building? Even better. There's a track for you.",
    tracks: [
      {
        name: "AI Basics",
        detail: "What AI is, how to use it every day — explained simply.",
      },
      {
        name: "Build with AI",
        detail: "Make real apps and tools with AI. No degree needed.",
      },
      {
        name: "Web & App Coding",
        detail: "From first line of code to your first launched project.",
      },
      {
        name: "Earn with Skills",
        detail: "Freelancing, remote jobs, interviews. Skills into income.",
      },
    ],
    button: "Reserve my seat — Cohort 01",
  },
};

const mr: typeof en = {
  nav: {
    home: "मुख्यपृष्ठ",
    businesses: "व्यवसाय",
    community: "समुदाय",
    bootcamps: "बूटकॅम्प",
    about: "आमच्याबद्दल",
    join: "सामील व्हा",
  },
  hero: {
    eyebrow: "बीडचं समुदाय आणि व्यवसाय व्यासपीठ",
    punch1: "सगळं बीड.",
    punch2: "एक अ‍ॅप.",
    sub: "तुमचे क्लब. तुमची दुकानं. तुमचं भविष्य.",
    subEm: "सुरुवात बीडपासून. जगासाठी.",
    ctaPrimary: "तुमची जागा राखा",
    ctaSecondary: "व्यवसाय पाहा",
    est: "Est. Beed, MH",
    stats: [
      { big: "१ अ‍ॅप", small: "संपूर्ण शहरासाठी" },
      { big: "दिसू लागा", small: "प्रत्येक व्यवसाय ऑनलाइन" },
      { big: "१००% बीड", small: "इथेच बनवलं, अभिमानाने" },
    ],
    ribbon: [
      "रन क्लब",
      "बुक क्लब",
      "किराणा दुकानं",
      "संस्थापक",
      "क्रिएटर्स",
      "AI बूटकॅम्प",
      "कार्यक्रम",
      "चहा",
    ],
  },
  manifesto: {
    label: "आमचं वचन",
    text: "बीडने आम्हाला घडवलं. आता आम्ही बीडसाठी घडवतो. प्रत्येक दुकान — ऑनलाइन. प्रत्येक क्लब — जिवंत. प्रत्येक तरुण — कुशल आणि कमावता. संपूर्ण शहरासाठी एक अ‍ॅप. आज बीड जे घडवेल, उद्या जग त्यात सामील होईल.",
    signoff: "— बीडच्या गल्ल्यांपासून, सगळीकडे.",
  },
  pillars: {
    label: "BEEDOUT म्हणजे काय?",
    h1: "तीन गोष्टी.",
    h2: "बस्स.",
    sub: "गुंतागुंत नाही. माणसं भेटा, व्यवसाय वाढवा, नवी कौशल्यं शिका. झालं.",
    items: [
      {
        title: "तुमची माणसं शोधा",
        line: "धावा. वाचा. घडवा. तुमचा क्लब वाट पाहतोय.",
        cta: "क्लब पाहा",
      },
      {
        title: "व्यवसाय वाढवा",
        line: "तुमचं दुकान ऑनलाइन. ग्राहक येत राहतील.",
        cta: "व्यवसाय पाहा",
      },
      {
        title: "उद्याचं शिका",
        line: "AI, टेक, इनोव्हेशन — बीडमध्ये बूटकॅम्प, ऑनलाइन आणि ऑफलाइन.",
        cta: "बूटकॅम्प पाहा",
      },
    ],
  },
  phone: {
    label: "झलक",
    h1: "एक स्क्रोल,",
    h2: "संपूर्ण शहर.",
    sub: "क्लबशी गप्पा, उद्याचा कार्यक्रम, बाजारात नवीन काय — सगळं एका फीडमध्ये.",
    clubName: "बीड रन क्लब",
    clubMeta: "१२८ सदस्य · ३ ऑनलाइन",
    messages: [
      { from: "रोहन", text: "उद्या कंकालेश्वर लूप? सकाळी ६ वाजता" },
      { from: "स्नेहा", text: "मी आहे! पुढच्या आठवड्यात बालाघाट ट्रेल" },
      { from: "ओंकार", text: "धावल्यावर चहा माझ्याकडून" },
    ],
    eventTitle: "रविवार सूर्योदय धाव",
    eventMeta: "सकाळी ६:०० · कंकालेश्वर मंदिर",
    rsvp: "मी येणार",
    going: "४२ येणार",
    inputHint: "क्लबला मेसेज करा…",
  },
  strip: {
    label: "आधीच सामील",
    h: "बीड इथे",
    hAccent: "आहेच.",
    cta: "सगळे व्यवसाय पाहा →",
  },
  founderTeaser: {
    label: "हे कोण घडवतंय?",
    h1: "बीडमधून,",
    hAccent: "बीडसाठी.",
    sub: "BEEDOUT मागची गोष्ट — कोण घडवतंय, आणि का.",
  },
  cta: {
    sticker: "दरवाजे लवकरच उघडतायत",
    h: "तयार, बीड?",
    sub: "तुमचा क्लब, तुमचा व्यवसाय, किंवा बूटकॅम्पची जागा. आधी येणारेच गोष्ट लिहितात.",
    placeholder: "tumcha@email.com",
    button: "प्रतीक्षा यादीत या",
    doneTitle: "तुम्ही आत आहात. लवकर आलात. हेच महत्त्वाचं.",
    doneSub: "दरवाजे उघडताच आम्ही कळवू.",
    nospam: "स्पॅम नाही. फक्त क्रांती.",
  },
  footer: {
    tagline:
      "सगळं बीड. एक अ‍ॅप. क्लब, व्यवसाय, कौशल्यं — बीड, महाराष्ट्रापासून. जगासाठी.",
    platform: "प्लॅटफॉर्म",
    connect: "संपर्क",
    madeIn: "बीडमध्ये अभिमानाने बनवलं",
  },
  pages: {
    businesses: {
      label: "व्यवसाय विभाग",
      line1: "बीडचे व्यवसाय.",
      line2: "ऑनलाइन.",
      sub: "दुकानं, कॅफे, जिम, गॅरेज, क्लासेस — सगळे सापडतायत, ग्राहक मिळवतायत, मोठे होतायत. एवढं सोपं.",
    },
    community: {
      label: "समुदाय विभाग",
      line1: "तुमची माणसं",
      line2: "इथेच आहेत.",
      sub: "प्रत्येक क्लबला चॅट, कार्यक्रम आणि फीड. मरणारा ग्रुप चॅट नाही — वाढणारा समुदाय.",
    },
    bootcamps: {
      label: "कौशल्य विभाग",
      line1: "AI शिका.",
      line2: "बीडमध्ये.",
      sub: "AI, टेक आणि खरी कौशल्यं — तुमच्या शहरात, तुमच्या भाषेत, तुमच्या वेगाने.",
    },
  },
  categories: {
    All: "सर्व",
    Food: "खाणं-पिणं",
    Shops: "दुकानं",
    Health: "आरोग्य",
    Services: "सेवा",
    Education: "शिक्षण",
  },
  sampleNote: "नमुना — पुढचा व्यवसाय तुमचा असू शकतो",
  getOnline: {
    label: "तुमचंही ऑनलाइन करा",
    h1: "दुकान तुम्ही चालवा.",
    h2: "इंटरनेट आम्ही चालवू.",
    sub: "चार गोष्टी. एवढाच व्यवहार. गोंधळ नाही, टेक्निकल शब्द नाहीत.",
    steps: [
      {
        title: "आम्ही तुमचं पेज बनवू",
        line: "मेन्यू, किमती, फोटो, लोकेशन. एक लिंक. कुठेही शेअर करा.",
      },
      {
        title: "आम्ही तुमचं इन्स्टाग्राम चालवू",
        line: "रील्स आणि पोस्ट्स ज्या बीडला तुमच्या दारात आणतील. तुम्ही फक्त दुकान चालवा.",
      },
      {
        title: "आम्ही ग्राहक आणू",
        line: "जाहिराती आणि ऑफर्स — स्क्रोलिंगचं रूपांतर विक्रीत. खरे ऑर्डर, खरी गर्दी.",
      },
      {
        title: "आम्ही तुमचं अ‍ॅप बनवू",
        line: "डिलिव्हरी अ‍ॅप? बुकिंग अ‍ॅप? मोठं स्वप्न? आम्ही बनवू — सुरुवातीपासून शेवटपर्यंत.",
      },
    ],
    bottom: "मोठ्या शहराचं काम. बीडच्या किमती. फोन उचलणारी माणसं.",
    button: "माझा व्यवसाय BEEDOUT वर आणा",
  },
  clubs: {
    features: [
      "सदस्यांशी चॅट",
      "रील्स आणि फोटो शेअर करा",
      "कार्यक्रम ठरवा",
      "एका टॅपमध्ये RSVP",
      "पोल्स आणि चर्चा",
      "क्लब लीडरबोर्ड",
    ],
    startTitle1: "तुमचं आवडतं दिसत नाही?",
    startTitle2: "सुरू करा.",
    startSub:
      "बुद्धिबळ. कविता. शेती. गेमिंग. बीडमधल्या तीन माणसांना आवडत असेल, तर त्याचा क्लब हवाच.",
  },
  faq: {
    label: "प्रश्न",
    h1: "अजून विचार करताय?",
    h2: "बरोबरच आहे.",
    items: [
      {
        q: "BEEDOUT म्हणजे नक्की काय?",
        a: "सगळं बीड — क्लब, व्यवसाय आणि शिक्षण — एका अ‍ॅपमध्ये.",
      },
      {
        q: "हे मोफत आहे का?",
        a: "सामील होणं मोफत. क्लब मोफत. व्यवसायाच्या साधनांसाठी सोपे, प्रामाणिक प्लॅन — तुम्ही कशासाठी पैसे देता ते स्पष्ट कळेल.",
      },
      {
        q: "मला टेक्निकल काही येत नाही. जमेल का?",
        a: "WhatsApp वापरता येतं ना? मग BEEDOUT पण येईल. आम्ही याच निकषावर बनवतो.",
      },
      {
        q: "दरवाजे कधी उघडणार?",
        a: "लवकरच. आधी प्रतीक्षा यादी — लवकर येणाऱ्यांना आधी प्रवेश आणि खास सुविधा.",
      },
      {
        q: "हे फक्त बीडसाठी आहे का?",
        a: "सुरुवात बीडमध्ये. मग बीडसारखं हवं असणाऱ्या प्रत्येक शहरात.",
      },
    ],
  },
  bootcamp: {
    formats: [
      {
        title: "ऑफलाइन, बीडमध्ये",
        line: "खरा वर्ग. खरे मार्गदर्शक. तुमच्या शहरासोबत, समोरासमोर शिका.",
        tag: "वीकेंड बॅच",
      },
      {
        title: "ऑनलाइन, कुठूनही",
        line: "फोन किंवा लॅपटॉपवर लाइव्ह क्लास. तीच ऊर्जा, प्रवास शून्य.",
        tag: "संध्याकाळ बॅच",
      },
    ],
    stats: ["जागा — पहिलं वर्ष", "सोपे ट्रॅक", "नोकरी आणि कमाईवर लक्ष"],
    trackLabel: "तुमचा ट्रॅक निवडा",
    h1: "जिथे आहात,",
    h2: "तिथून सुरू करा.",
    sub: "कोड कधीच लिहिला नाही? उत्तम. आधीच बनवताय? अजून उत्तम. तुमच्यासाठी ट्रॅक आहेच.",
    tracks: [
      {
        name: "AI ची मुळाक्षरं",
        detail: "AI म्हणजे काय, रोज कसं वापरायचं — सोप्या भाषेत.",
      },
      {
        name: "AI सोबत बनवा",
        detail: "AI वापरून खरी अ‍ॅप्स आणि टूल्स बनवा. डिग्रीची गरज नाही.",
      },
      {
        name: "वेब आणि अ‍ॅप कोडिंग",
        detail: "कोडच्या पहिल्या ओळीपासून तुमच्या पहिल्या लाँच केलेल्या प्रोजेक्टपर्यंत.",
      },
      {
        name: "कौशल्यातून कमाई",
        detail: "फ्रीलान्सिंग, रिमोट नोकऱ्या, मुलाखती. कौशल्याचं उत्पन्नात रूपांतर.",
      },
    ],
    button: "माझी जागा राखा — कोहॉर्ट ०१",
  },
};

export type Dict = typeof en;
export type Lang = "en" | "mr";

const dictionaries: Record<Lang, Dict> = { en, mr };

/* ------------------------------------------------------------------ */
/* Context                                                             */
/* ------------------------------------------------------------------ */

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({ lang: "en", setLang: () => {}, t: en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("beedout-lang");
    if (saved === "mr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("beedout-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/* ------------------------------------------------------------------ */
/* Devanagari-aware text renderer                                      */
/* Wraps Devanagari word runs in the Marathi font so they render with  */
/* the correct typeface inside Latin-first headings.                   */
/* ------------------------------------------------------------------ */

export function Dev({ text, className }: { text: string; className?: string }) {
  const tokens = text.split(/(\s+)/);
  return (
    <span className={className}>
      {tokens.map((tok, i) =>
        /[\u0900-\u097F]/.test(tok) ? (
          <span key={i} className="font-marathi">
            {tok}
          </span>
        ) : (
          <span key={i}>{tok}</span>
        )
      )}
    </span>
  );
}
