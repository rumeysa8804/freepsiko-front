import styles from "../explore/explore.module.css";
import { Card, Job_card } from "./card/card";
export function Explore() {
  return (
    <>
      <div className={styles.orange_container}>
        <div className={styles.orange_container_title}>TAMAMLANAN ÇALIŞMALAR</div>
        <div className={styles.orange_container_text}>
        Tarafımızca yapılan, tamamlanan çalışmaların bazılarını burada 
görebilirsiniz. Yapılan çalışmaları görmek için tıklayınız
        </div>
      </div>
<Job_card/>
    </>
  );
}
