import React from "react";
import styles from "../styles/guaranty.module.css";
import { Guaranty } from "../utils/componentmetadata";
import { FiGlobe } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { LuFlower2 } from "react-icons/lu";
import { GiPayMoney } from "react-icons/gi";
// ---------------------getting all imports from above----------------
const GuarantyComp = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.wrapper_cont}>
        {Guaranty().map((item, index) => (
          <div className={styles.wrapper_item} key={index}>
            {(index == 0 && <TbTruckDelivery style={{ fontSize: "50px" }} />) ||
              (index == 1 && <FiGlobe style={{ fontSize: "50px" }} />) ||
              (index == 2 && <LuFlower2 style={{ fontSize: "50px" }} />) ||
              (index == 3 && <GiPayMoney style={{ fontSize: "50px" }} />)}
            <p className={styles.title}>{item.title}</p>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default GuarantyComp;
// ----------------------------------------------------
