import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/screen/FAQ/Faqcontent.css";




const faqData = [
  {
    id: 1,
    question: "The expense windows adapted sir. Wrong widen drawn.",
    answer:
      "ANSWER.",
  },
  {
    id: 2,
    question: "Six curiosity day assurance bed necessary?",
    answer:
      " ANSWER.",
  },
  {
    id: 3,
    question: "Produce say the ten moments parties?",
    answer:
      "ANSWER.",
  },
  {
    id: 4,
    question: "Simple innate summer fat appear basket his desire joy?",
    answer:
      "ANSWER.",
  },
  {
    id: 5,
    question: "Outward clothes promise at gravity do excited?",
    answer:
      "ANSWER.",
  },
];

export default function FaqContent() {
   const navigate = useNavigate();
  const [faqOpenId, setFaqOpenId] = useState(1);

  const toggleFaq = (id) => {
    setFaqOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faqc-page-wrapper">
      {/* Left sidebar space — 280px reserved */}
      <div className="faqc-sidebar-space" />

      {/* Main content */}
      <div className="faqc-main">
        <h1 className="faqc-heading">
          Frequently
          <br />
          asked questions
        </h1>

        <div className="faqc-layout">
          {/* Accordion */}
          <div className="faqc-accordion">
            {faqData.map((item) => {
              const isOpen = faqOpenId === item.id;
              return (
                <div
                  key={item.id}
                  className={`faqc-item ${isOpen ? "faqc-item--open" : ""}`}
                >
                  <button
                    className="faqc-trigger"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faqc-question">{item.question}</span>
                    <span className="faqc-icon">{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="faqc-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sidebar card */}
          <aside className="faqc-card">
            <div className="faqc-card-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect width="44" height="38" rx="4" fill="#3CB043"  />
                <polygon points="8,38 8,44 16,38" fill="#3CB043" />
              </svg>
            </div>
            <h3 className="faqc-card-title">Do you have more questions?</h3>
            <p className="faqc-card-desc">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
            <button className="faqc-card-btn"  onClick={() => navigate("/SignupPage")}>Shoot a Direct Mail</button>
          </aside>
        </div>
      </div>

    
    </div>
  );
}


