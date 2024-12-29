import styles from "./styles/stars.module.scss";
import gstyles from "./styles/gradient.module.scss";

export default function Home() {
  return (
  <div>
    <div className={styles.star}></div>
    <div className={gstyles.gradient}></div>
  </div>
);
}