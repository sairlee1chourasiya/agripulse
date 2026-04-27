import React from "react";
import "../../styles/screen/VenderList/Vendor.css";
import userimg from "../../assets/dashboard/main-page/userimg.png";


import { FaEye, FaTrash, FaSearch } from "react-icons/fa";

const data = [1, 2, 3, 4, 5];

const VendorTable = () => {
  return (
    <div className="vendor-container">

   
      <div className="vendor-header">
        <h2><span>Pending</span> Vendor List</h2>

        <div className="vendor-search">
          <input type="text" placeholder="Search Vendor" />
          <FaSearch />
        </div>
      </div>

      
      <div className="filter-card">
        <h3>Filter Data</h3>

        <div className="filter-grid">
          <div>
            <label>Select Year</label>
            <select><option>Choose</option></select>
          </div>

          <div>
            <label>Select Month</label>
            <select><option>Choose</option></select>
          </div>

          <div>
            <label>Select Date</label>
            <input type="date" />
          </div>

          <div>
            <label>Select Time</label>
            <input type="time" />
          </div>
        </div>
      </div>

     
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Vendor</th>
              <th>Seller ID</th>
              <th>Company/Shop Name</th>
              <th>Verification Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{String(index + 1).padStart(2, "0")}</td>

                <td>
                  <img src={userimg} alt="" />
                </td>

                <td>Rajat Pradhan</td>
                <td>5484651654UBGY</td>
                <td>Har Har Mahadev Store</td>

                <td className="status">Pending</td>

                <td className="actions">
                  <div className="icon1"><FaEye /></div>
                  <div className="icon1"><FaTrash /></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        <div className="table-footer">
          <div className="rows">
            Rows per page:
            <select>
              <option>05</option>
            </select>
          </div>

          <div className="pagination">
            <button>{"<"}</button>
            <button className="active">01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>



       <div className="vendor-header">
        <h2><span style={{color: "green"}}>Approved</span> Vendor List</h2>

        <div className="vendor-search">
          <input type="text" placeholder="Search Vendor" />
          <FaSearch />
        </div>
      </div>

   
      <div className="filter-card">
        <h3>Filter Data</h3>

        <div className="filter-grid">
          <div>
            <label>Select Year</label>
            <select><option>Choose</option></select>
          </div>

          <div>
            <label>Select Month</label>
            <select><option>Choose</option></select>
          </div>

          <div>
            <label>Select Date</label>
            <input type="date" />
          </div>

          <div>
            <label>Select Time</label>
            <input type="time" />
          </div>
        </div>
      </div>

    
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Vendor</th>
              <th>Seller ID</th>
              <th>Company/Shop Name</th>
              <th>Verification Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{String(index + 1).padStart(2, "0")}</td>

                <td>
                  <img src={userimg} alt="" />
                </td>

                <td>Rajat Pradhan</td>
                <td>5484651654UBGY</td>
                <td>Har Har Mahadev Store</td>

                <td className="status">Pending</td>

                <td className="actions">
                  <div className="icon1"><FaEye /></div>
                  <div className="icon1"><FaTrash /></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        <div className="table-footer">
          <div className="rows">
            Rows per page:
            <select>
              <option>05</option>
            </select>
          </div>

          <div className="pagination">
            <button>{"<"}</button>
            <button className="active">01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>


       <div className="vendor-header">
        <h2><span style={{color: "red"}}>Rejected</span> Vendor List</h2>

        <div className="vendor-search">
          <input type="text" placeholder="Search Vendor" />
          <FaSearch />
        </div>
      </div>

    
      <div className="filter-card">
        <h3>Filter Data</h3>

        <div className="filter-grid">
          <div>
            <label>Select Year</label>
            <select><option>Choose</option></select>
          </div>

          <div>
            <label>Select Month</label>
            <select><option>Choose</option></select>
          </div>

          <div>
            <label>Select Date</label>
            <input type="date" />
          </div>

          <div>
            <label>Select Time</label>
            <input type="time" />
          </div>
        </div>
      </div>

     
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Vendor</th>
              <th>Seller ID</th>
              <th>Company/Shop Name</th>
              <th>Verification Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{String(index + 1).padStart(2, "0")}</td>

                <td>
                  <img src={userimg} alt="" />
                </td>

                <td>Rajat Pradhan</td>
                <td>5484651654UBGY</td>
                <td>Har Har Mahadev Store</td>

                <td className="status">Pending</td>

                <td className="actions">
                  <div className="icon1"><FaEye /></div>
                  <div className="icon1"><FaTrash /></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="table-footer">
          <div className="rows">
            Rows per page:
            <select>
              <option>05</option>
            </select>
          </div>

          <div className="pagination">
            <button>{"<"}</button>
            <button className="active">01</button>
            <button>02</button>
            <button>03</button>
            <button>04</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>



    </div>
  );
};

export default VendorTable;