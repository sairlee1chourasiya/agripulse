import React from "react";
import { FaPlus } from "react-icons/fa";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
 



const Faqcontent = () => {
  return (
    <section className="faq-page">

      <Header />
      <Sidebar />

      <div className="main-content">

        <div className="faq-title">
          <h1>Frequently asked questions</h1>
        </div>

        <div className="dropdowncontent">

          <div className="faqbox">
            <div className="faq-top">
              <h3>The expense windows adapted sir. Wrong widen drawn.</h3>
              <FaPlus className="plusicon" />
            </div>

            <p>
              Offending belonging promotion provision an be oh consulted ourselves it.
              Blessing welcomed ladyship she met humoured sir breeding her.
            </p>
          </div>

          <div className="faqbox">
            <div className="faq-top">
              <h3>Six curiosity day assurance bed necessary?</h3>
              <FaPlus className="plusicon" />
            </div>
          </div>

          <div className="faqbox">
            <div className="faq-top">
              <h3>Produce say the ten moments parties?</h3>
              <FaPlus className="plusicon" />
            </div>
          </div>

          <div className="faqbox">
            <div className="faq-top">
              <h3>Simple innate summer fat appear basket his desire joy?</h3>
              <FaPlus className="plusicon" />
            </div>
          </div>

          <div className="faqbox">
            <div className="faq-top">
              <h3>Outward clothes promise at gravity do excited?</h3>
              <FaPlus className="plusicon" />
            </div>
          </div>

        </div>

      </div>

      <Footer />

    </section>
  );
};

export default Faqcontent;