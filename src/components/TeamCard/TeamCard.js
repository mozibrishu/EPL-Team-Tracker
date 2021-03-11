import React from 'react';
import { Link } from 'react-router-dom';
import './TeamCard.css'
const TeamCard = (props) => {
    const {idTeam,strTeam, strSport,strTeamBadge} = props.team;
    return (
        <div className="team-card">
            <img src={strTeamBadge} alt="" srcset="" className="team-badge"/>
            <h3>{strTeam}</h3>
            <p>Sport Type: {strSport}</p>
            <Link to={`/team/${idTeam}`}><button className="btn btn-primary">Explore </button></Link>
        </div>
    );
};

export default TeamCard;