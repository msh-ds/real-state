import Card from "../modules/Card";
import SideBar from "../modules/SideBar";
import styles from "./BuyResidentialPage.module.css";

function BuyResidentialPage({ data }) {
  const isEmpty = data.length === 0;
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>{<SideBar />}</div>
      <div className={styles.main}>
      {isEmpty ? (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      ) : (
        data.map((i) => <Card key={i.id || i._id} data={i} />)
      )}
      </div>
    </div>
  );
}

export default BuyResidentialPage;
