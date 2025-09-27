import Card from "../modules/Card";
import SideBar from "../modules/SideBar";
import styles from "./BuyResidentialPage.module.css";

function BuyResidentialPage({ data }) {
  const isEmpty = data.length === 0;
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>{<SideBar />}</div>
      {isEmpty ? (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      ) : (
        data.map((i) => <Card key={i.id || i._id} data={i} />)
      )}
    </div>
  );
}

export default BuyResidentialPage;
