import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTeams } from '../redux/slices/teamSlice/fetching';

import { Loader, TeamCard, Search } from '../components';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { teams } = useSelector(({ team }) => team);

  React.useEffect(() => {
    !teams && getTeams();
  }, []);

  const getTeams = async () => {
    try {
      await dispatch(fetchTeams()).unwrap();
    } catch (err) {
      navigate('/page-not-found', { replace: true, state: { serverError: true } });
    }
  };

  if (!teams) {
    return <Loader />;
  }

  return (
    <>
      <Search />
      <div className="home">
        <div className="teams">
          <div className="team team-east">
            <p className="conference-name conference-east">Eastern Conference</p>
            <div className="teams-wrapper">
              {teams
                .filter((team) => {
                  return team.conference.alias === 'EASTERN';
                })
                .map((team) => {
                  return <TeamCard key={team.id} team={team} conference="east" />;
                })}
            </div>
          </div>
          <div className="team team-west">
            <p className="conference-name conference-west">Western Conference</p>
            <div className="teams-wrapper">
              {teams
                .filter((team) => {
                  return team.conference.alias === 'WESTERN';
                })
                .map((team) => {
                  return <TeamCard key={team.id} team={team} conference="west" />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
