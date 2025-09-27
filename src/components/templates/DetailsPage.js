import Title from "../modules/Title";
import ItemList from "../modules/ItemList";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import styles from "./DetailsPage.module.css";
import { e2p, sp } from "../../../utils/replaceNumber";
import { categories } from "@/constants/strings";
import { icons } from "@/constants/icons";
import ShareButton from "../modules/ShareButton";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
