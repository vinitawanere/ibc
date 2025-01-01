import { Helmet } from "react-helmet";
import Carousel, { GalleryItem } from "../../../components/Carousel";
import ContactButtons from "../../../components/ContactButtons";
import galleryItemsData from "../../../config/yoga_gallery_items.json";

const galleryItems: GalleryItem[] = galleryItemsData;

const YogaTraining = () => {
  return (
    <>
      <Helmet>
        <title>IBC - Yoga Training</title>
      </Helmet>
      <Carousel galleryItems={galleryItems} />
      <ContactButtons />
    </>
  );
};

export default YogaTraining;
