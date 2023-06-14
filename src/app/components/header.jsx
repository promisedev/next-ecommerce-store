'use client';
import React,{useState}from "react";
import Image from "next/image"
import styles from "../styles/header.module.css";
import { subPages, Socials,Pages } from "../utils/metadata";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ArrowBackIos } from "@mui/icons-material";
// -----------------------getting all import above
const Header = () => {
const [showdress,setShowdress]= useState(false)
const [showcloth,setShowcloth]= useState(false)
//-------------------------------------setting up state vaiables above
const dropModal =(e)=>{
  const id = e.currentTarget.dataset.id
  //const len =e.currentTarget.parentElement.children.length; 

const element = e.currentTarget.parentElement.parentElement.children[1]
  
    element.classList.add(`${styles.show_modal1}`)  

}
const removeModal =(e)=>{
  const id = e.currentTarget.dataset.id
  //const len =e.currentTarget.parentElement.children.length;

const element = e.currentTarget.parentElement.parentElement.children[1]
  
    element.classList.remove(`${styles.show_modal1}`)   

}

  {/* --------settin all functions an parameter above----------------------- */}
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
        <div className={styles.search_div}></div>
        {/*// ------------------------------------pages--------------------*/}
        <div className={styles.pages_div}>
            <ul className={styles.pages_list}>
{Pages().map((page,index)=>(
    <li key={index} className={styles.page_li} data-id={index+1} onMouseOver={dropModal} onClick={dropModal} onMouseOut={removeModal}>
      {/* ----------------- */}
     {/*-----------------------------  */}
{page?.pages.length>0?(<span className={styles.link_txt}>{page.name} <ArrowBackIos style={{fontSize:"12px", transform:"rotate(-90deg)" }} className={styles.page_icon}/></span>):(<Link href={page.link} className={styles.link_txt}>{page.name}</Link>)}


    </li>
))}


            </ul>
{/*// ----------------------setup modal--------------------------------*/}
<div className={styles.modal_div}>my dress {1}</div> 



        </div>
        {/*// ----------------------cart--------------------------------*/}
        <div className={styles.cart_div}></div>

      </div>
    </section>
  );
};

export default Header;
