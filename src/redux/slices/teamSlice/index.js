import { createSlice } from '@reduxjs/toolkit';

import { fetchTeams, fetchCurrentTeam } from './fetching';

const initialState = {
  teams: null,
  currentTeam: null,
};

export const teamSlice = createSlice({
  name: 'teams',
  initialState,
  extraReducers: {
    [fetchTeams.fulfilled]: (state, { payload }) => {
      state.teams = payload;
    },
    [fetchTeams.rejected]: (state, { payload }) => {
      state.teams = payload;
    },
    [fetchCurrentTeam.pending]: (state) => {
      state.currentTeam = null;
    },
    [fetchCurrentTeam.fulfilled]: (state, { payload }) => {
      state.currentTeam = payload;
    },
    [fetchCurrentTeam.rejected]: (state, { payload }) => {
      state.currentTeam = payload;
    },
  },
});

export default teamSlice.reducer;
