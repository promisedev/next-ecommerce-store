import Image from "next/image";
import styles from "./page.module.css";
import Layout from "./components/layout";
import Hero from "./components/hero";
import Component1 from "./components/springsales";
import Component2 from "./components/arrivals";
import Component3 from "./components/outerwear";
import Component4 from "./components/markdown";
import NewProducts from "./components/productslide";
import BestSellersProducts from "./components/productslide";
import Bosekemper from "./components/bosekemper";
import Shopoutfit from "./components/shopoutfit";
import {
  Justlanded,
  Collections,
  Poststories,
} from "./utils/componentmetadata";
import SunriseBlazer from "./components/sunrise";
import CollectionsComp from "./components/collectionslides";
import Dressedit from "./components/dressedit";
import PoststoriesComp from "./components/poststories";
import GuarantyComp from "./components/guaranty";
// ---------making all imports above---------------------------
const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* -----------------------summer */}
      <Component1 />
      {/* ----------------- florals ---------- */}
      <Component2 />
      {/* ------------------------outerwear----- */}
      <Component3 />
      {/* ----------------------markdowns */}
      <Component4 />
      {/* ----------------new products----------------- */}
      <NewProducts
        data={Justlanded()}
        title={"just landed"}
        link={{ title: "shop new arrivals", link: "new-arrivals" }}
        type={"new"}
        extra={{
          title: "new arrivals",
          link: { title: "view all", link: "new-arrivals" },
        }}
      />
      {/* ------best sellers----------------- */}
      <BestSellersProducts
        data={Justlanded()}
        title={"best sellers"}
        link={{ title: "shop best sellers", link: "best-sellers" }}
        type={"best sellers"}
        extra={{
          title: "best sellers",
          link: { title: "view all", link: "best-sellers" },
        }}
      />
      {/* ------------------------bosekemper------------------- */}
      <Bosekemper />
      {/* --------------------shopoutfit ------------------------ */}
      <Shopoutfit />
      {/* ---------------------Sunrise------------------------------------ */}
      <SunriseBlazer />
      {/* ----------------------collections-------------------------------- */}
      <CollectionsComp
        data={Collections()}
        title={"explore even more"}
        link={{ title: "view all collections", link: "collections" }}
      />
      {/* --------------------dressedit----------------------------------------- */}
      <Dressedit />

      {/* ------------------------------post stories --------------- */}
      <PoststoriesComp
        data={Poststories()}
        title={"latest stories"}
        link={{ title: "view all posts", link: "blog-posts" }}
      />
      {/* ------------------------------guaranty--------------- */}
      <GuarantyComp />
    </Layout>
  );
};

export default Home;
