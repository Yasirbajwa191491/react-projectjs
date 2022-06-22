import React from "react";
 import image from "./images/me2.jpg"
 import image1 from "./images/me1.png"
 import { useGlobalContext } from "./Context";
const Home = () => {

const {name}=useGlobalContext();

  
  return (
    <>
      <div className="container">
        <div className="row">
          <h1
            className="mt-5 "
            style={{
              color: "#696969",
              fontWeight: "bold",
              textShadow: "2px 2px red",
            }}
          >
            {name}
          </h1>
          <h5>MERN Stack Developer && React js Developer</h5>
          <p>
            Hi, I’m Yasir Sohail from Faisalabad, Pakistan. I’m a MERN Stack
            Developer and React js Developer and also proficient in React Native
            as well. I have been studying web development for last 2 years. I have
            been studying in BS Computer Science as well in Government College
            University Faisalabad. Now I have a lot of control over MERN Stack,
            react js, Next js, React Native, Redux, Node js, Express js,
            Mongoose, MongoDB and Restful Api’s.
          </p>
          <img src={image} alt="logo" />
          <hr/>
          <h5>My Skills</h5>
          <div className="progress  my-1">
           <span style={{fontWeight:"bold",marginRight:"5px"}}>React JS   :</span>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width:"90%"}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>Express JS:</span>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{width:"90%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>MongoDB:</span>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{width:"85%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>Node js:</span>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{width:"90%"}}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress  my-1">
           <span style={{fontWeight:"bold",marginRight:"5px"}}>Next JS   :</span>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width:"60%"}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>JavaScript:</span>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{width:"75%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>React Native:</span>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{width:"65%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>Html and CSS:</span>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{width:"90%"}}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress  my-1">
           <span style={{fontWeight:"bold",marginRight:"5px"}}>Git, Github and GitLab   :</span>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{width:"70%"}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>Redux:</span>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{width:"80%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>Restful Api:</span>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{width:"95%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress my-1">
          <span style={{fontWeight:"bold",marginRight:"5px"}}>Tailwind CSS:</span>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{width:"85%"}}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          {/* <img src={image1} alt="me" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
