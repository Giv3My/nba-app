import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import { Home, TeamProfile, PlayerProfile, PageNotFound } from './pages';

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="team/:teamId">
            <Route path="" element={<TeamProfile />} />
            <Route path="player/:playerId" element={<PlayerProfile />} />
          </Route>
        </Route>
        <Route path="page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
    // <>
    //   <Header />
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/team/:teamId" element={<TeamProfile />} />
    //     <Route exact path="/team/:teamId/player/:playerId" element={<PlayerProfile />} />
    //     <Route exact path="/page-not-found" element={<PageNotFound />} />
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </>
  );
}

export default App;
