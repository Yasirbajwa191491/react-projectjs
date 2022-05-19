import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="container-fluid my-5 ">
        <div
          className="container px-5 py-2"
          style={{
            boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
            backgroundColor: "#f0f8ff",
          }}
        >
          <h3 style={{color:"#696969"}}>Home Location:</h3>
          <p style={{ color: "#008b8b", marginLeft: "15px" }}>
            Shahkot District Nankana Sahib Faisalabad, Pakistan
          </p>
          <h3 style={{color:"#696969"}}>Email:</h3>
          <p style={{ color: "#008b8b", marginLeft: "15px" }}>
            yasirsohail912@gmail.com
          </p>
          <h3 style={{color:"#696969"}}>WhatsApp:</h3>
          <p style={{ color: "#008b8b", marginLeft: "15px" }}>+923491471823</p>
          <h5 style={{color:"#696969"}}>Social Profiles:</h5>
          <button
            onClick={() => window.open("https://www.facebook.com/yasir.yasirsohail")}
            className="mx-2 my-3" style={{backgroundColor:"#0000cd",color:"white"}}
          >
            Facebook
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/yasir-sohail-85067b178")}
            className="mx-2 my-3"
            style={{backgroundColor:"#1e90ff",color:"white"}}
          >
            Linkedln
          </button>
          <button
            onClick={() => window.open("https://www.instagram.com/yasir191491/")}
            className="mx-2 my-3"
            style={{backgroundColor:"#ff4500",color:"white"}}
          >
            Instagram
          </button>
          <button
            onClick={() => window.open("https://twitter.com/Y191491?s=09")}
            className="mx-2 my-3"
            style={{backgroundColor:"#afeeee",color:"white"}}
          >
            Twitter
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
