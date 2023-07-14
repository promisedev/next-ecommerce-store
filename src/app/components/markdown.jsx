import Link from "next/link";
import React from "react";
import styles from "../styles/markdown.module.css";
import { Markdown } from "../utils/componentmetadata";
const MarkdownComp = () => {
  // -----------------------
  return (
    <section className={styles.markdown_wrapper}>
      <article className={styles.markdown_cont}>
        <div className={styles.mark_item1}>
          <p className={styles.title1}>{Markdown().discounttag}</p>
          <h3>{Markdown().tag}</h3>
          <p className={styles.title2}>{Markdown().lowerthird}</p>
        </div>
        {/* ------------------------------- */}
        <div className={styles.mark_item2}>
          <h3>{Markdown().title}</h3>
          <p>{Markdown().subtitle}</p>
          <Link href={Markdown().link.link}>{Markdown().link.title}</Link>
        </div>
      </article>
    </section>
  );
};

export default MarkdownComp;
