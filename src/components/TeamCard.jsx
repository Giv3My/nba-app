import React from 'react';
import { Link } from 'react-router-dom';

import splitId from './../helpers/splitId';
import useWow from '../hooks/useWow';

function TeamCard({ team, conference }) {
  useWow();

  const teamId = splitId(team.sr_id);

  return (
    <Link to={`/team/${teamId}`} className="team-card-link">
      <div className="team-card animate__animated wow animate__bounceInUp">
        <img className="team-logo" src={team.team_logo_url} alt="teamLogo" />
        <p className={`team-name team-name-${conference}`}>{team.market} {team.name}</p>
      </div>
    </Link>
  )
};

export default TeamCard;
