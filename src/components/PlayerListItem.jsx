import React from 'react';
import { Link } from 'react-router-dom';

import splitId from './../helpers/splitId';
import convertToFeets from './../helpers/convertToFeets';

function PlayerListItem({ player, teamId }) {
  const playerId = splitId(player.sr_id);

  return (
    <Link to={`/team/${teamId}/player/${playerId}`} className="player-link">
      <ul className="team-profile-body animate__animated animate__fadeInLeft animate__delay-1s" >
        <li className="player-name">
          <img className="player-photo" src={player.photo} alt="playerPhoto" />
          <span>{player.full_name}</span>
        </li>
        <li className="player-num">
          <span>{player.jersey_number ? player.jersey_number : '-'}</span>
        </li>
        <li className="player-pos">
          <span>{player.position ? player.position : '-'}</span>
        </li>
        <li className="player-height">
          <span>{convertToFeets(player.height)}</span>
        </li>
        <li className="player-weight">
          <span>{player.weight} lbs</span>
        </li>
      </ul>
    </Link>
  )
};

export default PlayerListItem;