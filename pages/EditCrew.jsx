import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../src/client";

const EditCrew = ({ data }) => {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrew((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateCrew = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from("ClueCrew")
      .update({
        name: crew.name,
        age: crew.age,
        skillLevel: crew.skillLevel,
        debutNovel: crew.debutNovel,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  const deleteCrew = async (event) => {
    event.preventDefault();
    const { error } = await supabase.from("ClueCrew").delete().eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  return (
    <div>
      <form>
        <label>Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={crew.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Age</label>
        <br />
        <input
          type="test"
          id="age"
          name="age"
          value={crew.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Skill Level</label>
        <br />
        <input
          type="text"
          id="skillLevel"
          name="skillLevel"
          value={crew.skillLevel}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Debut Novel</label>
        <br />
        <input
          type="text"
          id="debutNovel"
          name="debutNovel"
          value={crew.debutNovel}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={updateCrew} />
        <button className="deleteButton" onClick={deleteCrew}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditCrew;
