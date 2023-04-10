import React from "react";
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className="Card">
      <img className = "magnifyImg" src="../magnifyingglass@40x.png"/>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      {/* <p>Skill Level: {props.skillLevel}</p>
      <p>Debut: {props.debutNovel}</p> */}
      <Link to={'edit/' + props.id}><button className="editButton">Edit</button></Link>
      <Link to={'/'+ props.id}><button className="editButton">More Info</button></Link>
    </div>
  );
};

export default Card;
