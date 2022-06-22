import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import save from "./images/save.jpg";
import "./Cards.css";
const Pagination = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  let limit = 10;
  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const totalPages = res.headers.get("x-total-count");

      console.log(totalPages);
      setPage(Math.ceil(totalPages / limit));
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClickPage = async (pageclick) => {
    const total = pageclick.selected + 1;
    try {
      const res = await fetch(
        `http://localhost:3000/comments?_page=${total}&_limit=${limit}`
      );
      const data = await res.json();

      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3)",
              gridGap:"50px",
              justifyContent:"space-around"
            }}
          >
            {userData.map((curEle) => {
              return (
                <>
                  <div className="main col" key={curEle.id}>
                    <h1 className="cardid">Card: #{curEle.id}</h1>
                    <ul className="cards">
                      <li className="cards_item">
                        <div className="card">
                          <div className="card_image">
                            <img src={save} alt="save" />
                          </div>
                          <div className="card_content">
                            <h2 className="card_title">{curEle.name}</h2>
                            <p className="card_text">{curEle.body}</p>
                            <button className="btn card_btn">Read More</button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={page}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handleClickPage}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          ></ReactPaginate>
        </div>
      </div>
    </>
  );
};

export default Pagination;
