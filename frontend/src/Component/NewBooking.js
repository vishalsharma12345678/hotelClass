import { useState } from "react";
import axios from "axios";
import "./form.css";
export function NewBooking() {
  const [data, setData] = useState({});
  function updatedata(e) {
    setData((s) => ({ ...s, [e.target.name]: e.target.value }));
  }
  return (
    <form className="form">
      <div className="form-group">
        <label>Reg No</label>
        <input
          type="text"
          name="regno"
          value={data.regno}
          onChange={updatedata}
        />
      </div>
      <div className="form-group">
        <label>Invoice No</label>
        <input type="text" name="invoice" onChange={updatedata} />
      </div>
      <div className="form-group">
        <label>Log No</label>
        <input type="text" name="logno" onChange={updatedata} />
      </div>
      <div className="form-group">
        <label>Check in</label>
        <input type="date" name="checkin" onChange={updatedata} />
      </div>
      <div className="form-group">
        <label>Expected Check out</label>
        <input type="date" name="checckout" onChange={updatedata} />
      </div>
      <div className="form-group">
        <label>Room Type</label>
        <select></select>
      </div>
      <div className="form-group">
        <label>No of Pax</label>
        <input type="number" placeholder="no of adult" />
        <input type="number" placeholder="no of child" />
      </div>
      <div className="form-group">
        <label>Room Number</label>
        <select></select>
      </div>
      <div className="form-group">
        <label>Meal Plan</label>
        <select></select>
      </div>
      <div className="form-group">
        <label>Guest Basis</label>
        <select></select>
      </div>
      <div className="form-group">
        <label>Guest Type</label>
        <select></select>
      </div>
      <div className="form-group">
        <label>Bill to</label>
        <input type="radio" name="bill" value="customer" /> Customer
        <input type="radio" name="bill" value="company" /> Company
      </div>
      <div className="form-group">
        <label>Company Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="form-group">
        <label>Mobile number</label>
        <input type="text" placeholder="+20" />
      </div>
      <div className="form-group">
        <label>WP/ND</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Passport</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Nationality</label>
        <select></select>
      </div>
      <div className="form-group">
        <label>Country of Residence</label>
        <select></select>
      </div>
      <div className="form-group">
        <label>D.O.B</label>
        <input type="date" />
      </div>
      <div className="form-group">
        <label>Profession</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Group</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Upload Id</label>
        <input type="file" />
      </div>
      <div className="form-group">
        <label>Payment Type</label>
        <select></select>
      </div>
      <div className="form-group">
        <label>Remark</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Verified By</label>
        <input type="text" />
      </div>
      <button type="submit">Save Data</button>
    </form>
  );
}
