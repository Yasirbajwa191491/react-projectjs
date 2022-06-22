import React,{useReducer, createContext, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Error from "./components/Error"
import Footer from './components/Footer'
import Products from './components/Products'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddProduct from './components/AddProduct'
import Update_Product from './components/Update_Product'
import Cards from './components/Cards'
import HorizontalScrol from './components/HorizontalScrol'
import Sidebar from './components/Sidebar'
import Test from './components/Test'
const reducer=(state,action)=>{
  switch(action.type){
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      }
      case "GET_DATA":
        return {
          ...state,
          commData: action.payload.commData,
          isLoading: false
        }
  }
  return state;
}
const initialState={
  isLoading:true,
  commData:[]
}
export const Context=createContext();
const App = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
  const fetchData = async () => {
    dispatch({type:"SET_LOADING"});
    try {
      const res = await fetch(
        `http://localhost:3000/comments`
      );
      const data = await res.json();
     console.log(data);
     dispatch({type:"GET_DATA",
    payload:{
      commData:data
    }})
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <Context.Provider value={{...state}}>
    <Navbar />
    <Routes>
      <Route path="/portfolio" element={<Home />} />
      <Route path='/project' element={<Portfolio />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Products />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/card' element={<Cards />} />
      <Route path='/scroll' element={<HorizontalScrol />} />
      <Route path='/test' element={<Test />} />
      <Route path='/sidebar' element={<Sidebar />} />
      <Route path='/updateproduct/:id' element={<Update_Product />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer/>
    </Context.Provider>
    </>
  )
}
export default App