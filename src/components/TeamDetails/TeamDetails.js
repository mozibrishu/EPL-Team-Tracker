import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TeamDetails.css";
import maleImage from "../../images/male.png";
import femaleImage from "../../images/female.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

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

  let imageSrc = "";
  if (strGender === "Male") {
    imageSrc = maleImage;
  } else {
    imageSrc = femaleImage;
  }

  const bannerStyle = {
    backgroundImage: `url("${strTeamBanner}")`,
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
          <div className="col-12 col-md-6 text-center">
            <h2>{strTeam}</h2>
            <p>Founded: {intFormedYear}</p>
            <p>Country: {strCountry}</p>
            <p>Sport Type: {strSport}</p>
            <p>Gender: {strGender}</p>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img className="gender-pic" src={imageSrc} alt="" />
          </div>
        </div>

        <div className="detail-description">
          <p>{strDescriptionEN}</p>
          <p>{strDescriptionEN}</p>
        </div>
      <div className="social">
        <a href={`https://${strFacebook}`} target='blank'><FontAwesomeIcon icon={faFacebook} className="facebook" /></a>
        <a href={`https://${strTwitter}`} target='blank'><FontAwesomeIcon icon={faTwitter}  className="twitter"/></a>
        <a href={`https://${strYoutube}`} target='blank'><FontAwesomeIcon icon={faYoutube} className="youtube"/></a>
      
      
      
      </div>

      </div>

    </div>
  );
};

export default TeamDetails;
