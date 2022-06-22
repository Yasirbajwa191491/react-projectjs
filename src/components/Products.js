import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [user, setUser] = useState([]);
  const navigate=useNavigate();
  const showData = async () => {
    try {
      const res = await fetch("http://localhost:8000/users");
      const data = await res.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const clickHandler = async (event) => {
    const key = event.target.value;
    if (key) {
      const res = await fetch(`http://localhost:8000/users/${key}`);
      const data = await res.json();
      setUser(data);
    } else {
      showData();
    }
  };
  const deleteHandler=async(id)=>{
    const res=await fetch(`http://localhost:8000/users/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data=await res.json();
    if(res.status !==200){
      alert("User not found");
    }else{
      alert("User Deleted successfully");
      showData();
    }
  }
  useEffect(() => {
    showData();
  }, []);
  return (
    <>
      <div
        className="container-fluid top-0"
        style={{ backgroundColor: "#fffaf0" }}
      >
        <div
          className="container bg-white"
          style={{
            boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
            borderRadius: "10px",
          }}
        >
          <h1 className="my-5 text-center text-danger">Products</h1>
          <input
            type="text"
            placeholder="Search an item"
            className="px-2 w-25"
            style={{ margin: "20px 0px 5px 100px" }}
            onChange={clickHandler}
          />
          <br />
          <button
            className="btn btn-primary"
            style={{ margin: "10px 0px 15px 140px" }}
            onClick={()=>navigate("/addproduct")}
          >
            Add New
          </button>
          <div className="data-table">
            <ul>
              <li style={{ padding: "0px 0px 0px 60px", fontWeight: "bold" }}>
                Name
              </li>
              <li style={{ padding: "0px 0px 0px 170px", fontWeight: "bold" }}>
                Phone
              </li>
              <li style={{ padding: "0px 0px 0px 160px", fontWeight: "bold" }}>
                Email
              </li>
              <li style={{ padding: "0px 0px 0px 230px", fontWeight: "bold" }}>
                Age
              </li>
              <li style={{ padding: "0px 0px 0px 60px", fontWeight: "bold" }}>
                Actions
              </li>
              <hr />
              {user.length > 0 ? (
                user.map((curEle) => {
                  return (
                    <>
                      <li>{curEle.username}</li>
                      <li>{curEle.phone}</li>
                      <li>{curEle.email}</li>
                      <li>{curEle.age}</li>
                      <button className="btn btn-dark" onClick={()=>deleteHandler(curEle._id)}>Delete</button>
                      <button className="btn btn-danger" onClick={()=>navigate("/updateproduct/"+curEle._id)}>Edit</button>
                      <hr />
                    </>
                  );
                })
              ) : (
                <h1>No data found</h1>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
