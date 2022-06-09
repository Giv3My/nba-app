import React from 'react';

function PlayerCard({ player }) {
  return (
    <div className="player-profile-wrapper animate__animated animate__fadeInUpBig">
      <div className="player-header">
        <div className="player-profile-photo">
          <img src={player.photo} alt="playerImage" />
        </div>
        <div className="player-profile-name">
          <span className="name">{player.full_name}</span>
          <span className="player-team">
            {player?.team?.market ?? '---'} {player?.team?.name ?? '---'} | #
            {player.jersey_number} | {player.position}
          </span>
        </div>
      </div>
      <div className="player-stats">
        <section className="general">
          <p className="season">Season: {player.season}</p>
          <p className="total-games">Games Played: {player.playerStats.games_played}</p>
          <p className="total-min">Minutes Played: {player.playerStats.minutes}</p>
        </section>
        <section className="goals-made">
          <p className="total-goals">Goals Made: {player.playerStats.field_goals_made}</p>
          <p className="three-points-goals">
            Goals Made (3 Points): {player.playerStats.three_points_made}
          </p>
          <p className="free-throws">
            Free Throws Made: {player.playerStats.free_throws_made}
          </p>
        </section>
        <section className="goals-attempted">
          <p className="total-attempted">
            Goals Attempted: {player.playerStats.field_goals_att}
          </p>
          <p className="three-points-attempted">
            Goals Attempted (3 Points): {player.playerStats.three_points_att}
          </p>
          <p className="free-throws-attempted">
            Free Throws Attempted: {player.playerStats.free_throws_att}
          </p>
        </section>
        <section className="additional">
          <p className="assists">Assists: {player.playerStats.assists}</p>
          <p className="steals">Steals: {player.playerStats.steals}</p>
          <p className="blocks">Blocks: {player.playerStats.blocks}</p>
          <p className="points">Points: {player.playerStats.points}</p>
        </section>
      </div>
    </div>
  );
}

export default PlayerCard;
