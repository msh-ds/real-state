"use client";

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import styles from "./AdminCard.module.css";
import { sp } from "../../../utils/replaceNumber";

function AdminCard({ data }) {
  const { _id, location, price, title, description } = data;

  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    console.log(result);
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishHandler}>انتشار</button>
      <Toaster />
    </div>
  );
}

export default AdminCard;
