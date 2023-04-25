import { Poppins } from "next/font/google";
import Footer from "../components/footer/Footer";
import styles from "./layout.module.css";

function RootLayout({ children }) {
  return (
    <div>
      <div className={styles.layout}>
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
