import React, { useState } from "react";

const AddProduct = () => {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    age: "",
    password:""
  });
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prev) => {
      return {
        ...user,
        [name]: value,
      };
    });
  };
  const SubmitFun=async(event)=>{
      event.preventDefault();
      const {username,phone,email,age,password}=user;
   console.log(username,phone,email,age,password);
      try {
         const res=await fetch("http://localhost:8000/users",{
             method: "POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body: JSON.stringify({
                username,phone,email,age,password 
             })
         }) 
         const data=await res.json();
         if(res.status===201){
            alert("User added successfully")
            setUser({
                username: "",
                phone: "",
                email: "",
                age: "",
                password:""
              })
         }else{
          
        alert("internal server Error, Please try again later");
         }
      } catch (error) {
          console.log(error);
      }
  }
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
          <h1 className="my-5 text-center text-danger">Add New Product</h1>
          <form  method="post">
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
          <button type="submit" className="btn btn-primary mt-2 mb-5"
          onClick={SubmitFun}
          >
            Add User
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
