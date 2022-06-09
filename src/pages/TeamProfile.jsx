import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentTeam } from '../redux/slices/teamSlice/fetching';

import { Loader, PlayerListItem } from '../components';

function TeamProfile() {
  const dispatch = useDispatch();
  const { currentTeam } = useSelector(({ team }) => team);

  const { teamId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchTeam();
  }, [teamId]);

  const fetchTeam = async () => {
    try {
      await dispatch(fetchCurrentTeam(teamId)).unwrap();
    } catch (err) {
      navigate('/page-not-found', { replace: true });
    }
  };

  if (!currentTeam) {
    return <Loader />;
  }

  return (
    <div className="team-profile">
      <div className="list-of-players animate__animated animate__fadeInDownBig">
        <h3 className="team-profile-name">
          {currentTeam.market} {currentTeam.name}
        </h3>
        <ul className="team-profile-head">
          <li>PLAYER</li>
          <li>#</li>
          <li>POS</li>
          <li>HEIGHT</li>
          <li>WEIGHT</li>
        </ul>
        {currentTeam.players.map((player) => {
          return <PlayerListItem key={player.id} teamId={teamId} player={player} />;
        })}
      </div>
    </div>
  );
}

export default TeamProfile;
