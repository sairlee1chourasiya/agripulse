import React, { useState } from "react";
import "../../styles/screen/model/model.css";
import closeIcon from "../../assets/dashboard/x-close.png";
import lockIcon from "../../assets/dashboard/lock-01.png";

const Model = ({ onClose }) => {
  // Default code is 0000 for first 4 digits (rest empty)
  const [code, setCode] = useState(["0", "0", "0", "0", "0", "0"]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="modal-page">
      <div className="modal-container">
        <img
          src={closeIcon}
          alt="close"
          className="close-icon"
          onClick={onClose}
        />

        <div className="lock-icon-box">
          <img src={lockIcon} alt="lock" />
        </div>

        <h2 className="modal-title">Set up Two-Factor Authentication</h2>

        <p className="modal-desc">
          To authorise transactions, scan this QR code with your Google Authenticator App and enter the verification code below.
        </p>

        <h4 className="verification-label">Verification code</h4>

        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <p className="resend-text">
          Didn’t get a code? <span>Click to resend.</span>
        </p>

        <div className="modal-buttons">
          <button className="cancel-btn">Cancel</button>
          <button className="confirm-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Model;
