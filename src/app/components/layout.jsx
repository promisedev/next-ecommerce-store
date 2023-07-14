import Image from "next/image";
import styles from "../styles/layout.module.css";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
