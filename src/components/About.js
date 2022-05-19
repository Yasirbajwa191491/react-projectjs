import React from "react";

const About = () => {
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
            University Faisalabad. I have completed my 3 months internship in React Native as well.
          </p>
          <img src="./wallpaper.jpg" alt="wallpaper" style={{height:"400px",width:"700px",margin:"auto"}} />
        </div>
      </div>
    </>
  );
};

export default About;
