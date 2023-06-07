import React from "react"
import styles from "../styles/header.module.css"
import {subPages} from "../utils/metadata"
import Link from "next/link"

// -----------------------getting all import above
const Header =()=>{

    return(
        <section className={styles.header}>
<div className={styles.div1}>
    {/* ----------pages link */}
<ul className={styles.list}>
    {subPages().map((page,index)=>(
        <li key={index}  className={styles.list_li}><Link href={page.link}>{page.name}</Link></li>
    ))}
</ul>
{/* --------social link----------------------- */}

</div>
{/* -------------------------logo div below----------------------- */}
<div className={styles.div2}>

</div>
{/* ------------------search div below----------------------- */}
<div className={styles.div3}></div>
        </section>
    )
}

export default Header