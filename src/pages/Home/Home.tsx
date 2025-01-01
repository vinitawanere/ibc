import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";
import BeachCards from "../../components/BeachCards";
import ServicesFooterNote from "../../components/ServicesFooterNote";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>IBC - Home</title>
      </Helmet>
      <Banner />
      <BeachCards />
      <ServicesFooterNote />
    </>
  );
}
