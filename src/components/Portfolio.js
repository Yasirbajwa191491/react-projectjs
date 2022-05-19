import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 style={{ color: "#696969", marginTop: "20px" }}>Yasir Sohail</h1>
          <p style={{ color: "#696969" }}>
            React JS Developer | MERN Stack Developer
          </p>
          <hr />
          <p style={{ color: "#696969" }}>
            I have created different projects of React js with backend as well
            with the help of Node js, Express js and MongoDB like WhatsApp
            clone, Facebook clone, Weather websites with restful Api's, Todo
            App, Notepad App and different portfolio websites. I have completed
            my 6th months internship in IT service of Goverment College
            University Faisalabad. I have completed my 3 months internship in
            React Native as well.
          </p>
          <p style={{ color: "#696969" }}>Here is Github Link of all source codes:</p>
          <p style={{ color: "#696969", cursor:"pointer" }} className="px-5">https://github.com/Yasirsoha</p>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active px-5">
                <img
                  src="./pic4.jpg"
                  className="d-block "
                  alt="..."
                  style={{ height: "600px", width: "600px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./pic2.jpg"
                  className="d-block "
                  alt="..."
                  style={{ height: "600px", width: "600px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./pic3.jpg"
                  className="d-block "
                  alt="..."
                  style={{ height: "600px", width: "600px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./pic1.jpg"
                  className="d-block "
                  alt="..."
                  style={{ height: "600px", width: "600px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./pic5.png"
                  className="d-block "
                  alt="..."
                  style={{ height: "600px", width: "600px" }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="./pic6.png"
                  className="d-block "
                  alt="..."
                  style={{ height: "600px", width: "600px" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
