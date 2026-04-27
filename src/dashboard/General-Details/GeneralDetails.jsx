import React from "react";
import Footer from "../FAQ/Footer";
import notification from "../../assets/dashboard/purchase-page/notification.png";
import "../../styles/screen/General-Details/GeneralDetails.css";

const GeneralDetails = () => {
  // -------- General Fields --------
  const generalFields = [
    { label: "Full Name", name: "fullName" },
    { label: "Father's / Mother's Name", name: "parentName" },
    { label: "Date of Birth", name: "dob" },
    { label: "Primary Contact Number", name: "primaryContact" },
    { label: "Secondary Contact Number", name: "secondaryContact" },
    { label: "Address Proof", name: "addressProof", type: "file" },
    { label: "Email", name: "email" },
    { label: "Designation of Vendor", name: "designation" },
    { label: "Country", name: "country" },
    { label: "State", name: "state" },
    { label: "City", name: "city" },
    { label: "Pincode", name: "pincode" },
    { label: "Aadhar Card Number", name: "aadharNumber" },
    { label: "Aadhar Card", name: "aadharFile", type: "file" },
    { label: "Pancard", name: "pancardFile", type: "file" },
  ];

  // -------- Bank Fields --------
  const bankFields = [
    { label: "Bank Name", name: "bankName" },
    { label: "Bank A/c No", name: "accountNo" },
    { label: "Bank Branch", name: "branch" },
    { label: "IFSC Code", name: "ifsc" },
    { label: "Bank A/c Holder Name", name: "holderName" },
    { label: "Upload Passbook", name: "passbook", type: "file" },
    { label: "Email", name: "bankEmail" },
    { label: "Mobile No", name: "mobile" },
    { label: "GST No", name: "gst" },
    { label: "Pancard No", name: "pancardNo" },
    { label: "Upload Pancard", name: "uploadPancard", type: "file" },
    { label: "Pincode", name: "bankPincode" },
  ];

  // -------- Section Component --------
  const Section = ({ title, fields }) => (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "25px",
        border: "1px solid #e5e5e5",
         marginLeft: "-280px",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>{title}</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
        }}
      >
        {fields.map((field, index) => (
          <div key={index}>
            <label style={{ fontSize: "12px", fontWeight: "500" }}>
              {field.label}
            </label>

            <input
              type={field.type || "text"}
              name={field.name}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Arial",
        background: "#f6f7fb",
        marginLeft: "-10px"
      }}
    >
      
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div
          style={{
            width: "280px",
           
          
            padding: "10px",
          }}
        >
        
 
        </div>


       


        

       
        <div style={{ flex: 1, padding: "20px 30px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              marginTop: "60px",
              

            }}
          >
            <h2 style={{ marginLeft: "-270px" }}>Your Profile</h2>

            <button
              style={{
                background: "#1f9d55",
                color: "#fff",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Update Info
            </button>
          </div>

      
          <Section title="General Details" fields={generalFields} />
          <Section title="Bank Detail" fields={bankFields} />
        </div>
      </div>

     
      <div style={{ marginLeft: "50px" }}>
      <Footer /></div>
    </div>
  );
};

export default GeneralDetails;