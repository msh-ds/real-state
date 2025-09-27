import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { icons } from "@/constants/icons";
import styles from "./Card.module.css";
import { sp } from "../../../utils/replaceNumber";

function Card({ data: { _id, location, title, category, price } }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span className={styles.price}>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
