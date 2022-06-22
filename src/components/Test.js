import React,{useContext} from 'react'
import { Context } from '../App'
import save from "./images/save.jpg";
import "./Cards.css";
 const Test = () => {
  const {isLoading,commData}=useContext(Context);
  console.log(commData);
  if(isLoading){
    return(
      <>
        <h1 style={{
          display:"grid",
          placeItems:"center"
        }}>Loading....</h1>
      </>
    )
  }
  return (
    <>
      <div className="container">
     {
       commData.map((curEle)=>{
         return (
             <div>
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
             </div>
         )
       })
     }
      </div>
    </>
  )
}
export default Test;