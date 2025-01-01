import { Link } from "react-router-dom";
import "../styles/BeachCards.css";
// Define the colors in the desired sequence
const colors = ["#4281a4", "#48A9A6", "#C1666B"];
const isMobile = window.innerWidth <= 768; // Define a mobile breakpoint (e.g., 768px)
const services = [
  {
    id: 1,
    title: "Yoga Training",
    description: "Relax and rejuvenate with our yoga classes.",
    status: "",
    link: "/services/yoga-training",
  },
  {
    id: 2,
    title: "Retail*",
    description: "Premium quality leather goods for all needs.",
    status: "Coming Soon",
    link: "/",
  },
  {
    id: 3,
    title: "IT Consulting*",
    description: "Expert solutions for your tech challenges.",
    status: "Coming Soon",
    link: "/",
  },
];

const BeachCards = () => (
  <>
    <div className="beach-container">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`card card-${index}`}
          style={{
            backgroundColor: colors[index % colors.length],
            width: isMobile ? "100%" : `${100 / services.length}%`,
          }}
        >
          <Link to={service.link}>
            <h1>{service.title}</h1>
          </Link>
          {/* <h5>{service.status}</h5> */}
        </div>
      ))}
    </div>
    {/* <ServicesFooterNote /> */}
  </>
);

export default BeachCards;
