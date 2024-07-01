import React from "react";
import styles from "./style";
import { Navbar, About, Footer, Home, Services, Solutions } from "./components";
const App = () => {
  return (
    <div className="w-full bg-black overflow-hidden z-10">
      <div className="">
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
          <Solutions />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
