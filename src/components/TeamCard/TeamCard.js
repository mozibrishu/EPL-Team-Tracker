import React from 'react';
import { Link } from 'react-router-dom';
import './TeamCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const TeamCard = (props) => {
    const { idTeam, strTeam, strSport, strTeamBadge } = props.team;
    return (
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3 text-center team-card">

            <div className="team-cards">

                <img src={strTeamBadge} alt="" srcset="" className="team-badge" />
                <h3>{strTeam}</h3>
                <p>Sport Type: {strSport}</p>
                <Link to={`/team/${idTeam}`} >
                    <button className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /> </button>
                </Link>
            </div>

        </div>
    );
};

export default TeamCard;