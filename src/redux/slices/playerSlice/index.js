import { createSlice } from '@reduxjs/toolkit';

import { fetchLastPlayerStats, fetchSearchPlayers } from './fetching';

const initialState = {
  playerProfile: null,
  foundPlayers: null
};

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setFoundPlayers: (state, { payload }) => {
      state.foundPlayers = payload;
    }
  },
  extraReducers: {
    [fetchLastPlayerStats.pending]: (state) => {
      state.playerProfile = null;
    },
    [fetchLastPlayerStats.fulfilled]: (state, { payload }) => {
      state.playerProfile = payload;
    },
    [fetchLastPlayerStats.rejected]: (state, { payload }) => {
      state.playerProfile = payload;
    },
    [fetchSearchPlayers.pending]: (state) => {
      state.foundPlayers = null;
    },
    [fetchSearchPlayers.fulfilled]: (state, { payload }) => {
      state.foundPlayers = payload;
    },
    [fetchSearchPlayers.rejected]: (state, { payload }) => {
      state.foundPlayers = payload;
    }
  }
});

export const { setFoundPlayers } = playerSlice.actions

export default playerSlice.reducer;