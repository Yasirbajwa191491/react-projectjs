import React,{createContext,useContext, useEffect} from 'react'
import {useDispatch} from "react-redux"

const ContextApi=createContext();
const name="Yasir Sohail...";
const Context = (props) => {
  const dispatch=useDispatch();
  const fetchData = async () => {
    try {
      dispatch({
        type: "isLoading",
      });
      const res = await fetch("http://localhost:3000/comments");
      const data = await res.json();
      dispatch({
        type: "GET_DATA",
        payload: {
          comData: data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHandler=async(id)=>{

    dispatch({
        type:"DELETE",
        payload:id
    })
   }
  useEffect(()=>{
 fetchData();
  },[])
  return (
    <ContextApi.Provider value={{name,deleteHandler}}>
        {props.children}
    </ContextApi.Provider>
  )
}

const useGlobalContext=()=>{
    return useContext(ContextApi);
}
export default Context
export {useGlobalContext};
