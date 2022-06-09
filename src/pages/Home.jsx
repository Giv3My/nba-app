import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTeams } from '../redux/slices/teamSlice/fetching';

import { Loader, TeamCard, Search } from '../components';

function Home() {
  const dispatch = useDispatch();
  const { teams } = useSelector(({ team }) => team);

  React.useEffect(() => {
    !teams && dispatch(fetchTeams());
  }, []);

  if (!teams) {
    return <Loader />
  }

  return (
    <>
      <Search />
      <div className="home">
        <div className="teams">
          <div className="team team-east">
            <p className="conference-name conference-east">Eastern Conference</p>
            <div className="teams-wrapper">
              {teams.filter(team => {
                return team.conference.alias === 'EASTERN'
              }).map(team => {
                return (
                  <TeamCard
                    key={team.id}
                    team={team}
                    conference='east'
                  />
                )
              })}
            </div>
          </div>
          <div className="team team-west">
            <p className="conference-name conference-west">Western Conference</p>
            <div className="teams-wrapper">
              {teams.filter(team => {
                return team.conference.alias === 'WESTERN'
              }).map(team => {
                return (
                  <TeamCard
                    key={team.id}
                    team={team}
                    conference='west'
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;
