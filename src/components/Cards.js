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
  return (
    <>
      <div className="container-fluid">
        <h1 className="my-5 text-center text-danger">Show Cards</h1>
        
        <InfiniteScroll
          dataLength={show.length}
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {show.map((curEle, index) => {
            return (
              <>
                <div class="card-wrap">
                  <div class="card-header one">
                    <i class="fas fa-code"></i>
                  </div>
                  <div class="card-content">
                    <h1 class="card-title">{curEle.username}</h1>
                    <p class="card-text">{curEle.email}</p>
                    <button class="card-btn one">code</button>
                  </div>
                </div>
              </>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Cards;
