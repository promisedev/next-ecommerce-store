"use client";
import React, { useState } from "react";
import styles from "../styles/modal.module.css";
import Link from "next/link";
import { useEffect } from "react";
// ---------------------------------making all imports above
const Modal = ({ id, link, title, data }) => {
  const [target, setTarget] = useState([]);

  useEffect(() => {
    const t = data.filter((data, index) => index == id);
    setTarget(t[0]);
  }, [id]);

  console.log(target);

  return (
    <article className={styles.modal_cont}>
      <div className={styles.modal_list}>
        {target.pages?.map((item, index) => (
          <ul className={styles.modal_item} key={index}>
            {item.data.map((ls, i) =>
              ls.data ? (
                <ul className={styles.modal_item2} key={i}>
                  {ls.data.map((ll, li) => (
                    <li key={li}>
                      {ll.link ? (
                        <Link href={ll.link}>{ll.title}</Link>
                      ) : (
                        <span>{ll.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <li key={i}>
                  {ls.link ? (
                    <Link href={ls.link}>{ls.title}</Link>
                  ) : (
                    <span>{ls.title}</span>
                  )}
                </li>
              )
            )}
          </ul>
        ))}
      </div>
      {/* ------------------------------------------------- */}
      <div
        className={styles.modal_image}
        style={{
          backgroundImage: `url(${target?.image})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img
          src={`/assets/${target?.image}`}
          alt="olify Logo"
          className={styles.image}
        /> */}
        {/* ------------------------description--------- */}
        <div className={styles.overlay}></div>
      </div>
    </article>
  );
};

export default Modal;
