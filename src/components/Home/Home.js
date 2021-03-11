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
        <h1 className="title">Follow Team</h1>
      </div>
      <div className="teams-container">
        <div className="container-fluid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 team-container">
          {teams.map((team) => (
            <TeamCard team={team}></TeamCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;