import { useState, useEffect } from "react";
import { useRoutes, Link } from "react-router-dom";
import "./App.css";
import CreateCrew from "../pages/CreateCrew";
import ReadCrew from "../pages/ReadCrew";
import EditCrew from "../pages/EditCrew";
import DetailCrew from "../pages/DetailCrew";
import { supabase } from "./client";

function App() {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchCrew = async () => {
      const { data } = await supabase
        .from("ClueCrew")
        .select()
        .order("created_at", { ascending: true });

      setCrew(data);
    };

    fetchCrew();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <ReadCrew data={crew} />,
    },
    {
      path: "/edit/:id",
      element: <EditCrew data={crew} />,
    },
    {
      path: "/:id",
      element: <DetailCrew data={crew} />,
    },
    {
      path: "/create",
      element: <CreateCrew />,
    },

  ]);

  return (
    <div className="App">
      <h1>Clue Crew</h1>
      <Link to="/">
        <button className="navButton"> View Crew Crew </button>
      </Link>
      <Link to="/create">
        <button className="navButton"> Create New Crew Member</button>
      </Link>
      {element}
    </div>
  );
}

export default App;
