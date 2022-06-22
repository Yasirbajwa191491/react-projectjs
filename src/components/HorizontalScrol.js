import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import HorizontalScroll from 'react-scroll-horizontal'
import "./Card.css";
const Cards = () => {
  const [show, setShow] = useState([]);
  const showData = async () => {
    try {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log(data);
    setShow(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData=async()=>{
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await res.json();
    // console.log(data);
    // const result=data.concat(data)
    // setShow(result);
    setTimeout(() => {
       const result= show.concat(show)
       setShow(result)
    }, 1500);
  }
  useEffect(() => {
    showData();
  }, []);
  const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}
  return (
    <>
      <div className="container-fluid">
        <h1 className="my-5 text-center text-danger">Scrolling</h1>
        
        <div style={parent}>
        <HorizontalScroll
        pageLock={true}
        reverseScroll={true}
        style={parent}
        className="bg-danger"
        animValues={6}
        config={{stiffness:7,damping:7}}
        >
            <div style={child} className="bg-danger" ><h1>hello</h1></div>
            <div style={child} ><h1>wold</h1></div>
            <div style={child} ><h1>hyy</h1></div>
        </HorizontalScroll>
      </div>

      </div>
    </>
  );
};

export default Cards;
