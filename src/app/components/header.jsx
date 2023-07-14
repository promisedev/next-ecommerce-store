"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/header.module.css";
import { subPages, Socials, Pages } from "../utils/metadata";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ArrowBackIos } from "@mui/icons-material";
import { useEffect } from "react";
import Modal from "./modal";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { IconButton } from "@mui/material";
// -----------------------getting all import above
const Header = () => {
  const [showdress, setShowdress] = useState(false);
  const [showcloth, setShowcloth] = useState(false);
  const [itemid, setitemid] = useState(0);
  const [_id, setid] = useState(0);

  useEffect(() => {
    setitemid(_id);
  }, [_id]);
  //-------------------------------------setting up state vaiables above
  const dropModal = (e) => {
    const id = e.currentTarget.dataset.id;
    setid(id - 1);
    //const len =e.currentTarget.parentElement.children.length;

    const element = e.currentTarget.children[1];
    console.log(element);
    if (id == 2 || id == 3) {
      element.classList.add(`${styles.show_modal1}`);
    }
  };
  const removeModal = (e) => {
    const id = e.currentTarget.dataset.id;
    //add on mouse leave to the ul parent;

    const element = e.currentTarget.children[1];
    console.log(element);

    element.classList.remove(`${styles.show_modal1}`);
  };

  {
    /* --------settin all functions an parameter above----------------------- */
  }
  const [hover, setHover] = useState(false);
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
      <div className={styles.div3}>
        {/* _____________________search_____________________*/}
        <div className={styles.search_div}>
          <IconButton>
            <CiSearch className={styles.icon} />
          </IconButton>
        </div>
        {/*// ------------------------------------pages--------------------*/}
        <div className={styles.pages_div}>
          <ul className={styles.pages_list}>
            {Pages().map((page, index) => (
              <li
                key={index}
                className={styles.page_li}
                data-id={index + 1}
                onMouseOver={dropModal}
                onClick={dropModal}
                onMouseLeave={removeModal}
              >
                {/* ----------------- */}
                {/*-----------------------------  */}
                {page?.pages.length > 0 ? (
                  <span className={styles.link_txt}>
                    {page.name}{" "}
                    <ArrowBackIos
                      style={{ fontSize: "12px", transform: "rotate(-90deg)" }}
                      className={styles.page_icon}
                    />
                  </span>
                ) : (
                  <Link href={page.link} className={styles.link_txt}>
                    {page.name}
                  </Link>
                )}
                {/* --------------------------------- */}
                <div className={styles.modal_div}>
                  {(itemid == 1 && (
                    <div className={styles.cloth_cont}>
                      <Modal
                        id={1}
                        link={"spring"}
                        title={"the spring edit"}
                        data={Pages()}
                      />
                    </div>
                  )) ||
                    (itemid == 2 && (
                      <div className={styles.dress_cont}>
                        <Modal
                          id={2}
                          link={"bodycon"}
                          title={"bodycon dresses"}
                          data={Pages()}
                        />
                      </div>
                    ))}
                </div>
                {/* ----------------------------------- */}
              </li>
            ))}
          </ul>
          {/*// ----------------------setup modal--------------------------------*/}
          {/* <div className={styles.modal_div}>
            {(itemid == 1 && (
              <div className={styles.cloth_cont}>
                <Modal
                  id={1}
                  link={"spring"}
                  title={"the spring edit"}
                  data={Pages()}
                />
              </div>
            )) ||
              (itemid == 2 && (
                <div className={styles.dress_cont}>
                  <Modal
                    id={2}
                    link={"bodycon"}
                    title={"bodycon dresses"}
                    data={Pages()}
                  />
                </div>
              ))}
          </div> */}
        </div>
        {/*// ----------------------cart--------------------------------*/}
        <div className={styles.cart_div}>
          <IconButton>
            <RxPerson className={styles.icon} />
          </IconButton>

          <span className={styles.icon_div}>
            <BsHandbag className={styles.icon} style={{ fontSize: "20px" }} />
            <div className={styles.tag}>0</div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
