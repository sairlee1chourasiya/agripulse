import React, { useState } from "react";
import "../../styles/screen/Bank-Details/Bank-Details.css";

const BankDetails = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="bank-container">
      <h2>Bank Detail</h2>

      <div className="form-grid">
        {/* Bank Name */}
        <div className="form-group">
          <label>Bank Name *</label>
          <input type="text" name="bankName" onChange={handleChange} />
        </div>

        {/* Account No */}
        <div className="form-group">
          <label>Bank A/c No *</label>
          <input type="text" name="accountNo" onChange={handleChange} />
        </div>

  
        <div className="form-group">
          <label>Bank Branch *</label>
          <input type="text" name="branch" onChange={handleChange} />
        </div>

       
        <div className="form-group">
          <label>IFS Code *</label>
          <input type="text" name="ifsc" onChange={handleChange} />
        </div>

       
        <div className="form-group">
          <label>Bank A/c Holder Name *</label>
          <input type="text" name="holderName" onChange={handleChange} />
        </div>

       
        <div className="form-group">
          <label>Upload front page of passbook *</label>
          <input type="file" name="passbook" onChange={handleChange} />
        </div>

        
        <div className="form-group">
          <label>E-mail</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>

        
        <div className="form-group">
          <label>Mobile No *</label>
          <input type="number" name="mobile" onChange={handleChange} />
        </div>

      
        <div className="form-group">
          <label>GST No</label>
          <input type="text" name="gst" onChange={handleChange} />
        </div>

      
        <div className="form-group">
          <label>Pancard No *</label>
          <select name="pancard" onChange={handleChange}>
            <option value="">Choose</option>
            <option value="ABCDE1234F">ABCDE1234F</option>
            <option value="PQRSX5678Z">PQRSX5678Z</option>
          </select>
        </div>

        
        <div className="form-group">
          <label>Upload Pancard *</label>
          <input type="file" name="pancardFile" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Pincode / Zipcode</label>
          <input type="number" name="pincode" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;