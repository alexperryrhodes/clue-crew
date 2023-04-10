import React from "react";
import { useState } from "react";
import { supabase } from "../src/client";

const CreateCrew = () => {
  const [crew, setCrew] = useState({
    name: "",
    age: "",
    skillLevel: "",
    debutNovel: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrew((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createCrew = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("ClueCrew")
      .insert({
        name: crew.name,
        age: crew.age,
        skillLevel: crew.skillLevel,
        debutNovel: crew.debutNovel,
      })
      .select();

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
        <input type="submit" value="Submit" onClick={createCrew} />
      </form>
    </div>
  );
};

export default CreateCrew;
