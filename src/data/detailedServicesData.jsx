import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RouteIcon from "@mui/icons-material/Route";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export const detailedServicesData = [
  {
    id: "drayage-intermodal",
    title: "Drayage & Intermodal Services",
    subtitle: "Chicago-based. Port-connected. Nationwide reach.",
    description:
      "At STS Smart Transportation Solutions Inc., we move freight with precision from Chicago's rail ramps to destinations across the U.S. Our asset-based drayage and intermodal network is built for reliability, cost efficiency, and real-time control—so your containers stay on schedule and on budget.",
    quote:
      "Why STS for Drayage & Intermodal: When every hour counts, you need a carrier that owns its assets, manages its drivers, and executes with discipline. STS delivers end-to-end visibility, tight ramp scheduling, and equipment control backed by 24/7 dispatch and modern fleet tracking.",
    image: "/images/drayage-intermodal.webp",
    alt: "Drayage and Intermodal Container Services",
    isReefer: false,
    icon: LocalShippingIcon,
    features: [
      "Company-owned fleet and professional drivers",
      "Direct rail access: BNSF, UP, CSX, CN, and NS",
      "Real-time GPS tracking and digital PODs",
      "Same-day / next-day ramp turns",
      "Proactive updates from dispatch—no silent handoffs",
      "Chassis inventory, tri-axle and genset options",
      "Overweight routing and scale support",
    ],
  },

  {
    id: "amazon-linehaul",
    title: "Amazon Linehaul",
    subtitle: "Amazon Linehaul & Final-Mile Support",
    description:
      "Scorecard-driven performance, surge-ready capacity, and 24/7 dispatch built for Amazon Relay. Chicago-based. Nationwide reach. STS supports Amazon middle-mile linehaul (relay, regional, and long-haul) and final-mile support for select markets. We combine asset-based drivers with strict operating playbooks to protect on-time performance and compliance—especially during peak.",
    quote:
      "What We Do: Middle-Mile (Linehaul): scheduled/spot blocks, live-load & drop-and-hook, regional & OTR. Final-Mile Support: box-truck routes, retail/DC shuttles, overflow and surge days. 24/7 Operations: proactive updates, exception handling, and rapid recovery plans.",
    image: "/images/amazon-linehaul.webp",
    alt: "Amazon Linehaul Logistics and Fleet Support",
    isReefer: false,
    icon: PrecisionManufacturingIcon,
    features: [
      "Scorecard Mindset: everything we do backs your on-time and compliance metrics.",
      "Surge-Ready: dedicated pools and rapid reserve activation for Prime Day, Q4, and weather events.",
      "Chicago Rail & Ramp Strength: BNSF, UP, CSX, CN, NS connectivity for intermodal + Amazon flows.",
      "Asset-Based Reliability: vetted drivers, monitored HOS, clean MVRs, and daily equipment checks.",
      "Real-Time Visibility: ELD/GPS tracking, geofences, and time-stamped status events.",
    ],
    storyData: {
      title: "Our Story",
      capabilitiesImage: "/images/our-story-1.webp",
      coverageImage: "/images/our-story-2.webp",
      capabilitiesList: [
        "Regional & OTR Linehaul: fixed blocks, ad-hoc assignments, and recovery loads",
        "Drop-and-Hook Programs: pre-staged trailers, yard coordination, seal integrity checks",
        "Time-Definite Windows: tight appointment adherence and proactive 'delay delta' alerts",
        "Secure, Food-Grade 53' Reefers (if needed): temperature monitoring for select programs",
        "Box-Truck + Final-Mile Support: liftgate, inside delivery, appointment delivery",
      ],
      coverage: {
        primary: "Chicago and the Midwest (IL, IN, WI, MI, MN, MO, OH, IA)",
        extended:
          "Coast-to-coast via OTR linehaul partners and networked lanes",
        facilities:
          "Daily touchpoints across major Amazon sites and Chicago rail ramps",
      },
    },
  },

  {
    id: "otr-dry-van",
    title: "OTR & Regional Dry Van",
    subtitle: "Safe, on-time performance with real-time tracking.",
    description:
      "STS delivers regional and long-haul dry van service built on reliability and precision. Our professional drivers and 24/7 dispatch team ensure safe, on-time performance with real-time tracking and proactive communication every mile.",
    quote: "Reliable delivery. Predictable performance.",
    image: "/images/otr-dry-van.webp",
    alt: "OTR and Regional Dry Van Trucking Services",
    isReefer: false,
    icon: RouteIcon,
    features: [
      "Full truckload (FTL) regional and nationwide long-haul coverage",
      "Modern, well-maintained fleet of 53ft air-ride dry van trailers",
      "24/7 proactive dispatch support and continuous route optimization",
      "Real-time GPS tracking with instant geofencing alerts and updates",
      "Experienced, thoroughly vetted professional OTR drivers",
      "Strict cargo safety protocols and high-security lock standards",
      "Seamless digital documentation, ELD compliance, and instant PODs",
    ],
  },

  {
    id: "reefer-solutions",
    title: "53' Reefer Solutions",
    subtitle: "Temperature-controlled freight with precision and reliability.",
    description:
      "STS delivers temperature-controlled freight with precision and reliability. Our modern 53’ reefers maintain strict temperature integrity for food, beverage, and perishable cargo — supported by real-time monitoring and 24/7 dispatch oversight.",
    quote: "Controlled temperature. Reliable performance.",
    image: "/images/reefer-solutions.webp",
    alt: "53 Foot Reefer Temperature Controlled Trucking Services",
    isReefer: true,
    icon: AcUnitIcon,
    features: [
      "State-of-the-art 53ft refrigerated trailers with advanced cooling units",
      "Continuous real-time temperature tracking and remote status monitoring",
      "Strict cold chain integrity maintenance for fresh, frozen, and perishable goods",
      "Pre-cooling protocols and rigorous sanitation checks prior to loading",
      "24/7 dedicated dispatch team with immediate temperature deviation alerts",
      "Experienced drivers specialized in handling climate-sensitive cargo",
      "Comprehensive temperature logs and digital PODs provided for every load",
    ],
  },

  {
    id: "box-trucks",
    title: "Box Truck Solutions",
    subtitle: "Flexible box truck services for short-haul and final-mile.",
    description:
      "STS provides flexible box truck services for short-haul, final-mile, and regional distribution. Ideal for LTL, retail, and eCommerce deliveries, our fleet ensures quick response times, secure handling, and reliable performance across every route.",
    quote: "Fast. Efficient. Always dependable.",
    image: "/images/box-trucks.webp",
    alt: "Box Truck Solutions and Final Mile Delivery Services",
    isReefer: false,
    icon: DepartureBoardIcon,
    features: [
      "Dedicated final-mile and short-haul regional distribution",
      "Liftgate-equipped box trucks for seamless dockless loading and unloading",
      "Tailored solutions for LTL, retail replenishment, and eCommerce flows",
      "Expedited same-day or next-day delivery options for urgent freight",
      "Inside delivery, white-glove setup, and strict appointment adherence",
      "Real-time route optimization and automated customer arrival alerts",
      "Fully vetted, professional drivers trained in secure cargo handling",
    ],
  },
];
