import React from 'react'

const Data = ({item}) => {
  return (


    <div className="data-container">
       


    
    <div className="data">
         <img src={item.image}  className="data-img" />
        

        <div className=" data-text">
            <h4>{item.title}</h4>
            <div className="data-type">
                <p>{item.type}</p>
            </div>
        </div>




    </div> </div>
  )
}

export default Data;