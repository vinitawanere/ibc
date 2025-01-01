import { Helmet } from "react-helmet";
import About from "../../components/About";
import trainerData from "../../config/about_trainer.json";

export default function AboutTrainer() {
  const { imagePath, description, title } = trainerData;
  return (
    <>
      <Helmet>
        <title>IBC - About Trainer</title>
      </Helmet>
      <About imagePath={imagePath} description={description} title={title} />
    </>
  );
}
