import React from "react";
import DetailView from "../components/DetailView";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailCrew = ({ data }) => {
    const { id } = useParams();
    const [crew, setCrew] = useState({
        id: null,
        name: "",
        age: "",
        skillLevel: "",
        debutNovel: "",
      });
    
      useEffect(() => {
          const result = data.filter((item) => String(item.id) === id)[0];
        setCrew({
          name: result.name,
          age: result.age,
          skillLevel: result.skillLevel,
          debutNovel: result.debutNovel,
        });
      }, [data, id]);

    return ( 
        <DetailView name={crew.name} age={crew.age} skillLevel={crew.skillLevel} debutNovel={crew.debutNovel} />
    );
  };
  
  export default DetailCrew;