// import "./App.css";
import React from "react";
import AboutPage from "./LandingPage/Components/AboutPage";
import Footer from "./LandingPage/Components/Footer";
import Header from "./LandingPage/Components/Header";
import styles from "./App.css";
function App() {
  return (
    <React.Fragment>
      <div className={styles.base}>
        <Header />
        <AboutPage />
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
