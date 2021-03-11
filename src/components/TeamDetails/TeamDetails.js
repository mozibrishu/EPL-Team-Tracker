import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TeamDetails.css";
import maleImage from "../../images/male.png";
import femaleImage from "../../images/female.png";

const TeamDetails = () => {
  const [team, setTeam] = useState({});
  const { teamId } = useParams();

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [teamId]);

  const {
    strTeamBadge,
    strCountry,
    strGender,
    strTeam,
    strSport,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strYoutube,
    strInstagram,
    intFormedYear,
  } = team;

  let imageSrc = "";
  if (strGender === "Male") {
    imageSrc = maleImage;
  } else {
    imageSrc = femaleImage;
  }

  return (
    <div>

      <div className="banner background-opacity">
        <div className="title">
          <img className="teamBadge" src={strTeamBadge} alt="" />
        </div>
      </div>

      <div className="details-card row row-cols-1  row-cols-md-2">
        <div className="details">
          <h2>{strTeam}</h2>
          <p>Founded: {intFormedYear}</p>
          <p>Country: {strCountry}</p>
          <p>Sport Type: {strSport}</p>
          <p>Gender: {strGender}</p>
        </div>

        <div className="team-image">
          <img className="gender-pic" src={imageSrc} alt="" />
        </div>
      </div>

      <div className="detail-description">
        <p>{strDescriptionEN}</p>
      </div>
    </div>
  );
};

export default TeamDetails;
