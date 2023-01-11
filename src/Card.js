import React from "react";

const Card = ({id, name, email}) => {
    return(
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw-2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="roboimage" />
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
            
        </div>
    )
}

export default Card;