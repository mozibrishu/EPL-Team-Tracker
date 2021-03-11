import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TeamDetails.css";
import maleImage from "../../images/male.png";
import femaleImage from "../../images/female.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'

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
    strTeamBanner,
    strFacebook,
    strTwitter,
    strYoutube,
    intFormedYear,
  } = team;

  // Conditional Formatting
  let imageSrc = "";
  if (strGender === "Male") {
    imageSrc = maleImage;
  } else {
    imageSrc = femaleImage;
  }

  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)), url("${strTeamBanner}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div className="teamDetails-container">

      <div style={bannerStyle}>
        <div className="title">
          <img className="teamBadge" src={strTeamBadge} alt="" />
        </div>
      </div>

      <div className="details-container">
        <div className="d-flex row align-items-center team-info">
          <div className="col-12 col-md-6 text-left pl-5">
            <h2>{strTeam}</h2>
            <p><FontAwesomeIcon icon={faCheckCircle} /> Founded: {intFormedYear}</p>
            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
            <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img className="gender-pic" src={imageSrc} alt="" />
          </div>
        </div>

        <div className="detail-description">
          <p>{strDescriptionEN}</p>
        </div>

        <div className="social">
          <a href={`https://${strFacebook}`} target='blank'><FontAwesomeIcon icon={faFacebook} className="facebook" /></a>
          <a href={`https://${strTwitter}`} target='blank'><FontAwesomeIcon icon={faTwitter} className="twitter" /></a>
          <a href={`https://${strYoutube}`} target='blank'><FontAwesomeIcon icon={faYoutube} className="youtube" /></a>
        </div>

      </div>
    </div>
  );
};

export default TeamDetails;
