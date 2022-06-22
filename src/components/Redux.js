import { useSelector } from "react-redux";
import { useGlobalContext } from "./Context";

const Redux = () => {
  const mystate = useSelector((state) => state.Reducer.comData);
   const {deleteHandler}=useGlobalContext();
  
  return (
    <>
    
    <h1 className="text-danger my-5 text-center">Call Api with Redux</h1>
      <button className="my-2 btn btn-primary mx-5" style={{fontSize:"15px"}}>Add New</button>
      <div className="stories-div my-2">
        {mystate.map((curEle) => {
          return (
            <div className="card" key={curEle.id}>
            <h2 className="divtitle">{curEle.id < 10? `#0${curEle.id}`:`#${curEle.id}`}</h2>
              <h2 className="divtitle">{curEle.name}</h2>
              <p className="content-card">
                By <span> {curEle.email}</span> | {curEle.body}
              </p>
              <div className="card-button">
                <a
                  href={"https://Yasirsoha.github.io/portfolio"}
                  target="_blank"
                >
                  Read More
                </a>
                <a onClick={()=>deleteHandler(curEle.id)}>Remove</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Redux;
