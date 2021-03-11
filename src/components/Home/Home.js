import React, { useEffect, useState } from "react";
import TeamCard from "../TeamCard/TeamCard";
import "./Home.css";

const Home = () => {
  let [teams, setTeams] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div>
      <div className="banner">
        <h1 className="title">EPL Team Tracker</h1>
      </div>

      <div className="teams-container">
        <div className="d-flex row align-items-center team-container">
          {teams.map((team) => (
            <TeamCard team={team}></TeamCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
