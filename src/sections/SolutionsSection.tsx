import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { BedDouble, Building, ChefHat, Compass, Flower2, Globe2, Handshake, Landmark, Map, ShoppingBag } from "lucide-react";

type AudienceKey = "experience" | "visitor";

type Category = {
  id: string;
  label: string;
  icon: LucideIcon;
  accentGradient: string;
  caption: string;
};

type SolutionCard = {
  title: string;
  description: string;
  metric: string;
  image: string;
  categoryId: string;
};

type SolutionDataset = {
  headline: string;
  categories: Category[];
  cards: SolutionCard[];
};

const audienceOptions: { id: AudienceKey; label: string }[] = [
  { id: "experience", label: "Experience Businesses" },
  { id: "visitor", label: "Visitor Economy" },
];

const solutionsDatasets: Record<AudienceKey, SolutionDataset> = {
  experience: {
    headline:
      "A single intelligence layer that understands every visitor moment and helps each category deliver experiences that feel effortless, personal and commercially sound.",
    categories: [
      {
        id: "eat-drink",
        label: "Eat & Drink",
        icon: ChefHat,
        accentGradient: "from-[#7d66ff] via-[#8f68ff] to-[#38b6ff]",
        caption: "Reply to every diner and boost rebookings.",
      },
      {
        id: "stay",
        label: "Stay",
        icon: BedDouble,
        accentGradient: "from-[#64a4ff] via-[#78b7ff] to-[#b2f0ff]",
        caption: "Keep occupancy high with gracious follow-ups.",
      },
      {
        id: "explore",
        label: "Explore",
        icon: Compass,
        accentGradient: "from-[#ff9ccf] via-[#ffd1f2] to-[#fff1d6]",
        caption: "Guide tours with conversational intelligence.",
      },
      {
        id: "shop",
        label: "Shop",
        icon: ShoppingBag,
        accentGradient: "from-[#a48bff] via-[#d6c7ff] to-[#ffe5ff]",
        caption: "Turn impulse buyers into vocal advocates.",
      },
      {
        id: "travel",
        label: "Travel",
        icon: Globe2,
        accentGradient: "from-[#61d7ff] via-[#a0f7ff] to-[#e0fff9]",
        caption: "Keep itineraries smooth across partners.",
      },
      {
        id: "wellness",
        label: "Wellness",
        icon: Flower2,
        accentGradient: "from-[#ffa7c2] via-[#ffc7d7] to-[#ffe5f1]",
        caption: "Personalize care journeys automatically.",
      },
      {
        id: "culture",
        label: "Culture",
        icon: Landmark,
        accentGradient: "from-[#feb672] via-[#ffd29f] to-[#ffeed1]",
        caption: "Amplify cultural houses through earned love.",
      },
    ],
    cards: [
      {
        title: "Eat & Drink",
        description: "Cafes, restaurants, bars, breweries, wineries",
        metric: "5 venue types",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
        categoryId: "eat-drink",
      },
      {
        title: "Stay",
        description: "Hotels, resorts, serviced apartments, boutique stays, farmstays, lodges",
        metric: "6 venue types",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
        categoryId: "stay",
      },
      {
        title: "Explore",
        description: "Museums, galleries, attractions, aquariums, zoos, precincts",
        metric: "6 venue types",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        categoryId: "explore",
      },
      {
        title: "Shop",
        description: "Duty free, boutiques, retail outlets, craft stores, markets",
        metric: "5 venue types",
        image: "https://images.unsplash.com/photo-1484712401471-05c7215830eb?auto=format&fit=crop&w=900&q=80",
        categoryId: "shop",
      },
      {
        title: "Travel",
        description: "Airports, cruises, ferries, terminals, lounges, rental hubs",
        metric: "6 venue types",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
        categoryId: "travel",
      },
      {
        title: "Wellness",
        description: "Spas, retreats, hot springs, wellness centres",
        metric: "4 venue types",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
        categoryId: "wellness",
      },
      {
        title: "Culture",
        description: "Performing arts, festivals, live events, heritage sites, cultural tours",
        metric: "5 venue types",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
        categoryId: "culture",
      },
    ],
  },
  visitor: {
    headline:
      "A single intelligence layer that understands every visitor moment and helps each category deliver experiences that feel effortless, personal and commercially sound.",
    categories: [
      {
        id: "city",
        label: "City",
        icon: Building,
        accentGradient: "from-[#5f7cff] via-[#95a3ff] to-[#d9e7ff]",
        caption: "Improve civic attraction flows and real experience feedback",
      },
      {
        id: "precinct",
        label: "Precinct",
        icon: Map,
        accentGradient: "from-[#31d57f] via-[#67e5a3] to-[#e2ffe6]",
        caption: "Understand movement, satisfaction pockets and loyalty hotspots",
      },
      {
        id: "council",
        label: "Council",
        icon: Landmark,
        accentGradient: "from-[#ffbe6f] via-[#ffd79f] to-[#fff2d8]",
        caption: "Guide neighbourhood hospitality, balance resident and visitor needs",
      },
      {
        id: "region",
        label: "Region",
        icon: Globe2,
        accentGradient: "from-[#38b6ff] via-[#7edbff] to-[#e0fbff]",
        caption: "Connect key operators, benchmark performance, level up experience pathways",
      },
      {
        id: "destination",
        label: "Destination",
        icon: Compass,
        accentGradient: "from-[#ff8fb5] via-[#ffc3d9] to-[#ffeef7]",
        caption: "Map emotion journeys and spend drivers across the full itinerary",
      },
      {
        id: "tourism-authority",
        label: "Tourism Authority",
        icon: Handshake,
        accentGradient: "from-[#7e8bff] via-[#b3c7ff] to-[#eef3ff]",
        caption: "Track sentiment shifts, campaign impact and returning visitor indicators",
      },
    ],
    cards: [
      {
        title: "City Welcome Centers",
        description: "Civic signal hub, Attraction readiness sweeps, Resident sentiment digest",
        metric: "+31 NPS lift",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
        categoryId: "city",
      },
      {
        title: "Council Service Pods",
        description: "Neighbourhood service boards, Hospitality partner sync, Resident balance indicators",
        metric: "-22% escalations",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
        categoryId: "council",
      },
      {
        title: "Regional Wayfinding",
        description: "Benchmark intelligence, Trail operator pulse, Experience pathway planner",
        metric: "+18% spend",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
        categoryId: "region",
      },
      {
        title: "Destination Journey Lab",
        description: "Itinerary personalization, Emotion peak lab, Campaign lift tracker",
        metric: "+12% arrivals",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        categoryId: "destination",
      },
      {
        title: "Precinct Pulse",
        description: "Live footfall overlays, Loyalty hotspot tracker, Operator alignment loop",
        metric: "650+ reports",
        image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=900&q=80",
        categoryId: "precinct",
      },
      {
        title: "Tourism Authority HQ",
        description: "Sentiment intelligence war room, Program impact lens, Return intent radar",
        metric: "+40% RSVPs",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
        categoryId: "tourism-authority",
      },
    ],
  },
};

export function SolutionsSection() {
  const [activeAudience, setActiveAudience] = useState<AudienceKey>("experience");

  const dataset = solutionsDatasets[activeAudience];
  const categoryGridClass = (() => {
    const total = dataset.categories.length;
    if (total >= 7) return "lg:grid-cols-7";
    if (total === 6) return "lg:grid-cols-6";
    if (total === 5) return "lg:grid-cols-5";
    return "lg:grid-cols-4";
  })();
  return (
    <section id="solutions" className="bg-white py-20 sm:py-24 scroll-mt-28 lg:scroll-mt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Solutions</p>
          <h2 className="mt-4 bg-gradient-to-r from-[#6b5dff] via-[#8f68ff] to-[#38b6ff] bg-clip-text text-[clamp(1.6rem,3vw,2.6rem)] font-display font-semibold leading-tight text-transparent">
            See how nrtureAI uplifts every visitor touchpoint.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{dataset.headline}</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div className="flex w-full max-w-lg gap-1 rounded-full bg-[#e8f2ff] p-1 text-sm font-semibold sm:text-base">
            {audienceOptions.map((option) => {
              const isActive = option.id === activeAudience;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveAudience(option.id)}
                  className={`flex-1 rounded-full px-4 py-3 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isActive
                      ? "bg-gradient-to-r from-[#45b2ff] via-[#6b5dff] to-[#9f6bff] text-white shadow-[0_15px_35px_rgba(107,93,255,0.35)]"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full">
          <div className={`grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 ${categoryGridClass}`}>
            {dataset.categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="group flex flex-col items-center gap-2 rounded-3xl border border-white/60 bg-gradient-to-br from-white via-[#eef2ff] to-[#dce4ff] px-4 py-5 text-center text-slate-600 shadow-[0_0_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5"
                >
                  <span className={`rounded-2xl p-3 text-slate-900 shadow-inner shadow-[0_0_28px_rgba(15,23,42,0.22)] bg-gradient-to-br ${category.accentGradient}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="text-sm font-semibold text-slate-700">{category.label}</p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
