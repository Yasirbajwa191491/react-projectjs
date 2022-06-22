import React from 'react'
import "./Cardbar.css";
const Card = () => {
  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
        <div className='my-2'>
          <input
            type="text"
            placeholder="search here"

          />
        </div>
      </form>
       <div className="stories-div my-2">
            <div className="card" >
              <h2 className='divtitle'>title</h2>
              <p className='content-card'>
                By <span> author</span> | <span> num_comments </span>
                comments
              </p>
              <div className="card-button">
                <a href={"www.facebook.com"} target="_blank">
                  Read More
                </a>
                <a href="#" >
                  Remove
                </a>
              </div>
            </div>
          
      </div>  
    </>
  )
}

export default Card