import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLastPlayerStats } from '../redux/slices/playerSlice/fetching';

import { Loader, PlayerCard } from '../components';

function PlayerProfile({ }) {
  const dispatch = useDispatch();
  const { playerProfile } = useSelector(({ player }) => player);

  const { playerId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchPlayer();
  }, [playerId]);


  const fetchPlayer = async () => {
    try {
      await dispatch(fetchLastPlayerStats(playerId)).unwrap();
    } catch (err) {
      navigate('/page-not-found', { replace: true });
    }
  };

  if (!playerProfile) {
    return <Loader />;
  }

  return (
    <div className="player-profile">
      <PlayerCard player={playerProfile} />
    </div>
  )
};

export default PlayerProfile;
