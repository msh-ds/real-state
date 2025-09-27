import { HiFilter } from "react-icons/hi";
import styles from "./SideBar.module.css";
import Link from "next/link";
import { categories } from "@/constants/strings";

function SideBar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i) => (
        <Link
          key={i}
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
