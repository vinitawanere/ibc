import { Helmet } from "react-helmet";
import About from "../../components/About";
import aboutUsData from "../../config/about_us.json";

export default function Aboutus() {
  const { imagePath, description, title } = aboutUsData;
  return (
    <>
      <Helmet>
        <title>IBC - About Us</title>
      </Helmet>
      <About imagePath={imagePath} description={description} title={title} />
    </>
  );
}
