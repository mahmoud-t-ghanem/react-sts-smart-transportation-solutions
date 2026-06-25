import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RouteIcon from "@mui/icons-material/Route";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export const servicesData = [
  {
    id: "amazon-linehaul",
    title: (
      <>
        Amazon <br /> Linehaul & <br /> Final-Mile
      </>
    ),
    icon: PrecisionManufacturingIcon,
    image: "../public/images/amazon-linehaul.webp",
    alt: "Amazon Linehaul and Intermodal Logistics Freight Trains",
    quote: (
      <>
        Peak-ready. Performance-driven. <br /> Always on time.
      </>
    ),
    description: (
      <>
        STS supports{" "}
        <strong>Amazon middle-mile and final-mile operations</strong> with
        dependable drivers, on-time performance, and surge-ready capacity. From
        regional linehaul to local delivery, we provide{" "}
        <strong>24/7 scalable coverage</strong> built to meet Amazon’s strict
        service and compliance standards.
      </>
    ),
  },
  {
    id: "box-trucks",
    title: (
      <>
        Box Truck <br /> Solutions
      </>
    ),
    icon: DepartureBoardIcon,
    image: "../public/images/box-trucks.webp",
    alt: "Box Truck Solutions Final Mile Delivery Fleet and Logistics",
    quote: <>Fast. Efficient. Always dependable.</>,
    description: (
      <>
        STS provides <strong>flexible box truck services</strong> for
        short-haul, final-mile, and regional distribution. Ideal for{" "}
        <strong>LTL, retail, and eCommerce deliveries,</strong> our fleet
        ensures quick response times, secure handling, and reliable performance
        across every route.
      </>
    ),
  },
  {
    id: "drayage-intermodal",
    title: (
      <>
        Drayage & <br /> Intermodal
      </>
    ),
    icon: LocalShippingIcon,
    image: "../public/images/drayage-intermodal.webp",
    alt: "Drayage and Intermodal Port Logistics",
    quote: (
      <>
        Chicago-based. Port-connected. <br /> Nationwide reach.
      </>
    ),
    description: (
      <>
        STS operates{" "}
        <strong>asset-based drayage and intermodal services</strong> across
        Chicago’s major rail ramps — <strong>BNSF, UP, CSX, CN, and NS.</strong>{" "}
        Our own drivers and equipment handle container moves with{" "}
        <strong>
          precision scheduling, chassis control, and real-time tracking,
        </strong>{" "}
        ensuring freight flows efficiently and on time.
      </>
    ),
  },
  {
    id: "otr-dry-van",
    title: (
      <>
        OTR & Regional <br /> Dry Van
      </>
    ),
    icon: RouteIcon,
    image: "../public/images/otr-dry-van.webp",
    alt: "OTR and Regional Dry Van Logistics Truck on Highway",
    quote: (
      <>
        Reliable delivery. Predictable <br /> performance.
      </>
    ),
    description: (
      <>
        STS delivers <strong>regional and long-haul dry van service</strong>{" "}
        built on reliability and precision. Our professional drivers and 24/7
        dispatch team ensure <strong>safe, on-time performance</strong> with
        real-time tracking and proactive communication every mile.
      </>
    ),
  },
  {
    id: "reefer-solutions",
    title: (
      <>
        53' Reefer <br /> Solutions
      </>
    ),
    icon: AcUnitIcon,
    image: "../public/images/reefer-solutions.webp",
    alt: "53 Reefer Solutions Temperature Controlled Cargo Semi Truck",
    quote: (
      <>
        Controlled temperature. Reliable <br /> performance.
      </>
    ),
    description: (
      <>
        STS delivers{" "}
        <strong>
          temperature-controlled freight with precision and reliability.
        </strong>{" "}
        Our modern 53’ reefers maintain strict temperature integrity for food,
        beverage, and perishable cargo — supported by{" "}
        <strong>real-time monitoring and 24/7 dispatch oversight.</strong>
      </>
    ),
    isReefer: true,
  },
];
