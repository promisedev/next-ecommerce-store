'use client';
import React,{useState}from "react";
import Image from "next/image"
import styles from "../styles/header.module.css";
import { subPages, Socials } from "../utils/metadata";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// -----------------------getting all import above
const Header = () => {

    const [hover,setHover]=useState(false)
  return (
    <section className={styles.header}>
      <div className={styles.div1}>
        {/* ----------pages link */}
        <ul className={styles.list}>
          {subPages().map((page, index) => (
            <li key={index} className={styles.list_li}>
              <Link href={page.link}>{page.name}</Link>
            </li>
          ))}
        </ul>
        {/* --------social link----------------------- */}
        <div className={styles.socials}>
          {Socials().map((social, index) => (
            <a href={social.link}>
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
      {/* -------------------------logo div below----------------------- */}
      <div className={styles.div2}>
        {hover ? (
          <Image
            
            src="/assets/logo-black.png"
            alt="olify Logo"
            width={120}
            height={50}
            className={styles.logo}
            priority
          />
        ) : (
          <Image
            
            src="/assets/logo-white.png"
            alt="olify Logo"
            width={120}
            height={50}
            className={styles.logo}
            priority
          />
        )}
      </div>

      {/* ------------------search div below----------------------- */}
      <div className={styles.div3}></div>
    </section>
  );
};

export default Header;
