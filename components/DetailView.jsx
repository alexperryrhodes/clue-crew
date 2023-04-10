import React from "react";

const DetailView = (props) => {
  return (
    <div className="DetailView">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Skill Level: {props.skillLevel}</p>
      <p>Debut: {props.debutNovel}</p>
    </div>
  );
};

export default DetailView;
