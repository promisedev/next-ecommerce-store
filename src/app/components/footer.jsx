"use client";
import React from "react";
import styles from "../styles/footer.module.css";
import { Footer, Socials } from "../utils/metadata";
import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// --------------------making all imports above

const FooterComp = () => {
  // const date = new Date().getFullYear();
  return (
    <section className={styles.wrapper}>
      <article className={styles.wrapper_item1}>
        {/* ---------------about--------------- */}
        <div className={styles.about}>
          <Image
            src={Footer().about.image}
            width={150}
            height={60}
            className={styles.about_image}
            alt="logo"
          />
          <p>{Footer().about.desc}</p>
        </div>
        {/* -----------------sub-pages----------------- */}
        <div className={styles.subpages}>
          <p className={styles.footer_title}>shop olify</p>
          <ul className={styles.page_list}>
            {Footer().pages.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* -----------------pages---------------------- */}
        <div className={styles.pages}>
          <p className={styles.footer_title}>company</p>
          <ul className={styles.page_list}>
            {Footer().subpages.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* ------------------news letter---------------- */}
        <div className={styles.newsletter}>
          <p className={styles.footer_title}>newsletter</p>
          <div className={styles.newsletter_cont}>
            <p>signup and save on your first order</p>
            <form className={styles.email_cont}>
              <input type="email" name="email" placeholder="Your email" />
              <buttom type="submit">Subscribe</buttom>
            </form>
            <div className={styles.newsletter_social}>
              {Socials().map((social, index) => (
                <a href={social.link} key={index}>
                  {(index == 0 && (
                    <FacebookIcon
                      className={styles.social_icon}
                      style={{ fontSize: "16px" }}
                    />
                  )) ||
                    (index == 1 && (
                      <TwitterIcon
                        className={styles.social_icon}
                        style={{ fontSize: "16px" }}
                      />
                    )) ||
                    (index == 2 && (
                      <InstagramIcon
                        className={styles.social_icon}
                        style={{ fontSize: "16px" }}
                      />
                    ))}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
      {/* ------------------------------------------------ */}
      <article className={styles.wrapper_item2}>
        <div className={styles.copy}>
          {/* {`Copyright © ${date}, Olafy. All rights reserved. See our terms of
          use and privacy notice.`} */}
        </div>
        {/*----------------pay options  */}
        <div></div>
      </article>
    </section>
  );
};

export default FooterComp;
