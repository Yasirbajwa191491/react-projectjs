import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
const Update_Product = () => {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    age: "",
    password: "",
  });
  const params = useParams();
  const navigate=useNavigate();
  const showData = async () => {
    const _id = params.id;
    const res = await fetch(`http://localhost:8000/users/${_id}`);
    const data = await res.json();
    console.log(data);
    setUser({ ...user, username: data[0].username, phone:data[0].phone, email:data[0].email,
    age: data[0].age,
    password: data[0].password
    });
  };
  useEffect(() => {
    showData();
  }, []);
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const SubmitFun = async (event) => {
    event.preventDefault();
    try {
      const {username,phone,email,age,password}=user;
      const _id = params.id;
    const res = await fetch(`http://localhost:8000/users/${_id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username,phone,email,age,password
      })
    });
    const data=await res.json();
    if(res.status !==200)
    {
      alert("User Error");
    }else{
      alert("User data updated successfully");
      navigate("/product");
    }
    } catch (error) {
      console.log(error);
    }
  };
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
            paddingLeft: "180px",
          }}
        >
          <h1 className="my-5 text-center text-danger">Update Product</h1>
          <form method="post">
            <label htmlFor="">Name:</label>
            <br />
            <input
              type="text"
              className="ps-2 w-25 rounded"
              onChange={handleInput}
              value={user.username}
              name="username"
              placeholder="Enter Name"
            />
            <br />
            <br />
            <label htmlFor="">Phone Number:</label>
            <br />
            <input
              type="tel"
              name="phone"
              className="ps-2 w-25 rounded"
              onChange={handleInput}
              value={user.phone}
              placeholder="Enter Phone Number"
            />
            <br />
            <br />
            <label htmlFor="">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              className="ps-2 w-25 rounded"
              onChange={handleInput}
              value={user.email}
              placeholder="Enter email"
            />
            <br />
            <br />
            <label htmlFor="">Age:</label>
            <br />
            <input
              type="number"
              name="age"
              className="ps-2 w-25 rounded"
              onChange={handleInput}
              value={user.age}
              placeholder="Enter Age"
            />
            <br />
            <br />
            <label htmlFor="">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              className="ps-2 w-25 rounded"
              onChange={handleInput}
              value={user.password}
              placeholder="Enter Password"
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary mt-2 mb-5"
              onClick={SubmitFun}
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update_Product;
