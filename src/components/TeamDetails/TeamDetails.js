import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './TeamDetails.css'

const TeamDetails = () => {
    const [team,setTeam] = useState({});
    const {teamId} = useParams();

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[teamId])
    const {strTeamBadge,strCountry, strDescriptionEN,strFacebook,strTwitter,strYoutube,strInstagram,intFormedYear} = team;
    return (
        <div>
            {/* <Banner badge={strTeamBadge}></Banner> */}
            <div className="banner background-opacity">
                <div className="title"><img className="teamBadge" src={strTeamBadge} alt=""/></div>
            </div>
            <h1>Team Details:{teamId}</h1>
            <h2>{strCountry}</h2>
        </div>
    );
};

export default TeamDetails;