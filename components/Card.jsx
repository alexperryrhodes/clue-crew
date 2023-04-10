import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      {/* <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link> */}
      <img className = "magnifyImg" src="../magnifyingglass@40x.png"/>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Skill Level: {props.skillLevel}</p>
      <p>Debut: {props.debutNovel}</p>
    </div>
  );
};

export default Card;
